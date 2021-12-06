import re

re_type_len = re.compile("(\S+)(\(\d+\))")
re_not_syblom = re.compile("\W")

datatype = {
    "int":{
        "script":"number",
        "db":"DataTypes.INTEGER"
    },

    "string":{
        "script":"string",
        "db":"DataTypes.STRING",
        "allowlen":1
    },

    "bigint":{
        "script":"number",
        "db":"DataTypes.BIGINT"
    },

    "date":{
        "script":"Date",
        "db":"DataTypes.DATE"
    }
}

model_temp = '''import * as db from "./";
import {
  DataTypes,
  Model,
  Optional
} from 'sequelize';

interface #TABLENAME#Attributes {
##VALUES##
}

##OPTIONAL##

export class #TABLENAME# extends Model<#TABLENAME#Attributes##ATTRIBE##> implements #TABLENAME#Attributes {
##DECLARE##
};
#TABLENAME#.init({
##DATETYPE##
}, {
    sequelize:db.sequelize,
##OPTION##
    tableName: "#TABLENAME#"
});
'''


def generate():
    f = open("model.xl",'r', encoding="utf-8")
    lines = f.readlines()
    f.close()

    tableArray: list = []
    tempobj:dict = {}
    index = 0
    isoption = False
    options = []
    self_option = False

    forbidden = ["associate", "index"]

    for line in lines:
        if line.startswith("//"):
            continue
        line:str = line.replace("\n","")
        line.rstrip()
        t_c = line.count(' ')
        line = line.lstrip()
        if line == "":
            continue
        if t_c == 0:
            if line == "[option]":
                isoption = True
                continue
            isoption = False
            if "class" in tempobj:
                tableArray.append(tempobj)
                tempobj = {}
                
            sybom = re_not_syblom.search(line)
            if sybom is None:
                if line in forbidden:
                    raise Exception(f'{line} 不能使用额model名称')
                tempobj['class'] = line
                tempobj["optional"] = []
            else:
                raise Exception(f'{line} 包含特殊符号')
        else:
            if t_c == 4:
                if isoption:
                    options.append(f'\t{line},')
                    continue

                print(line.startswith('[option'))
                if line.startswith('[option]') is True:
                    self_option = True
                    tempobj['option'] = []
                    continue
                else:
                    self_option = False

                val,type = line.split(":",2)
                if "attribute" not in tempobj:
                    tempobj["attribute"] = []
                tempobj["attribute"].append({"value":val,"type":type})
                index = tempobj["attribute"].__len__()-1
            elif t_c >= 8:
                if self_option:
                    tempobj['option'].append(f'\t{line},')
                    continue

                if line.find("autoIncrement") != -1:
                    if tempobj["attribute"][index]["value"] not in tempobj['optional']:
                        tempobj['optional'].append(tempobj["attribute"][index]["value"])
                elif line.find("defaultValue") != -1:
                        tempobj['optional'].append(tempobj["attribute"][index]["value"])
                if "extand" in tempobj["attribute"][index]:
                    tempobj["attribute"][index]["extand"].append(line);
                else:
                    tempobj["attribute"][index]["extand"] = [line];

    if "class" in tempobj:
        tableArray.append(tempobj)

    for model in tableArray:
        temp = model_temp
        class_name = model['class']
        temp = temp.replace("#TABLENAME#",class_name)
        attribute = []
        declare = []
        datas = []
        for att in model['attribute']:
            value_name = att['type']
            type_name = value_name
            type_len = None
            xx = re_type_len.search(value_name)
            if xx:
                type_name, type_len = xx.groups()
            
            attribute.append(f"\t{att['value']}: {datatype[type_name]['script']};")
            declare.append(f"\tpublic {att['value']}!: {datatype[type_name]['script']};")
            data_line = ""
            if type_len:
                data_line = "{"+f"type: {datatype[type_name]['db']}{type_len},"
                if "extand" in att:
                    for ex_val in att["extand"]:
                        if ex_val.find(":") != -1:
                            data_line += f"{ex_val},"
                        else:
                            data_line += f"{ex_val}:true,"
                data_line = data_line[:-1]
                data_line += "},"
                datas.append(f"\t{att['value']}:{data_line}");
            else:
                data_line = "{"+f"type: {datatype[type_name]['db']},"
                if "extand" in att:
                    for ex_val in att["extand"]:
                        if ex_val.find(":") != -1:
                            data_line += f"{ex_val},"
                        else:
                            data_line += f"{ex_val}:true,"
                data_line = data_line[:-1]
                data_line += "},"
                datas.append(f"\t{att['value']}:{data_line}")
        if "optional" in model and model['optional'].__len__() > 0:
            temp_str = "interface ##TABLENAME##CreationAttributes extends Optional<##TABLENAME##Attributes, ##ATTR##> {}"   
            temp_str = temp_str.replace("##TABLENAME##", class_name)
            strs = ""
            for val in model['optional']:
                strs += f"'{val}'"
                if model['optional'].index(val) != model['optional'].__len__() -1:
                    strs += " | "
            print(strs)
            temp_str = temp_str.replace("##ATTR##", strs)
            temp = temp.replace("##OPTIONAL##",temp_str)
            temp = temp.replace("##ATTRIBE##",f",{class_name}CreationAttributes" )
        else:
            temp = temp.replace("##OPTIONAL##\n","")
            temp = temp.replace("##ATTRIBE##","")

        temp = temp.replace("##VALUES##","\n".join(attribute))
        temp = temp.replace("##DECLARE##","\n".join(declare))    
        temp = temp.replace("##DATETYPE##", "\n".join(datas))

        if 'option' in model:
            temp = temp.replace("##OPTION##","\n".join(model['option']))
        else:
            temp = temp.replace("##OPTION##","\n".join(options))

        f = open(f"models/{class_name}.ts",'w', encoding="utf-8")
        f.write(temp)
        f.close()
    
if __name__ == '__main__':
    try:
        generate()
    except Exception as e:
        print(e)
