/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.GameMatching = (function() {

        /**
         * Properties of a GameMatching.
         * @memberof game
         * @interface IGameMatching
         * @property {boolean|null} [matching] GameMatching matching
         */

        /**
         * Constructs a new GameMatching.
         * @memberof game
         * @classdesc Represents a GameMatching.
         * @implements IGameMatching
         * @constructor
         * @param {game.IGameMatching=} [properties] Properties to set
         */
        function GameMatching(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMatching matching.
         * @member {boolean} matching
         * @memberof game.GameMatching
         * @instance
         */
        GameMatching.prototype.matching = false;

        /**
         * Creates a new GameMatching instance using the specified properties.
         * @function create
         * @memberof game.GameMatching
         * @static
         * @param {game.IGameMatching=} [properties] Properties to set
         * @returns {game.GameMatching} GameMatching instance
         */
        GameMatching.create = function create(properties) {
            return new GameMatching(properties);
        };

        /**
         * Encodes the specified GameMatching message. Does not implicitly {@link game.GameMatching.verify|verify} messages.
         * @function encode
         * @memberof game.GameMatching
         * @static
         * @param {game.IGameMatching} message GameMatching message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMatching.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matching != null && Object.hasOwnProperty.call(message, "matching"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.matching);
            return writer;
        };

        /**
         * Encodes the specified GameMatching message, length delimited. Does not implicitly {@link game.GameMatching.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameMatching
         * @static
         * @param {game.IGameMatching} message GameMatching message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMatching.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMatching message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameMatching
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameMatching} GameMatching
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMatching.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameMatching();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.matching = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMatching message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameMatching
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameMatching} GameMatching
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMatching.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMatching message.
         * @function verify
         * @memberof game.GameMatching
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMatching.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matching != null && message.hasOwnProperty("matching"))
                if (typeof message.matching !== "boolean")
                    return "matching: boolean expected";
            return null;
        };

        /**
         * Creates a GameMatching message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameMatching
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameMatching} GameMatching
         */
        GameMatching.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameMatching)
                return object;
            var message = new $root.game.GameMatching();
            if (object.matching != null)
                message.matching = Boolean(object.matching);
            return message;
        };

        /**
         * Creates a plain object from a GameMatching message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameMatching
         * @static
         * @param {game.GameMatching} message GameMatching
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMatching.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.matching = false;
            if (message.matching != null && message.hasOwnProperty("matching"))
                object.matching = message.matching;
            return object;
        };

        /**
         * Converts this GameMatching to JSON.
         * @function toJSON
         * @memberof game.GameMatching
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMatching.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMatching;
    })();

    game.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof game
         * @interface IPlayerInfo
         * @property {number|null} [userid] PlayerInfo userid
         * @property {number|null} [index] PlayerInfo index
         * @property {string|null} [nickname] PlayerInfo nickname
         * @property {number|Long|null} [gold] PlayerInfo gold
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof game
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {game.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo userid.
         * @member {number} userid
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.userid = 0;

        /**
         * PlayerInfo index.
         * @member {number} index
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.index = 0;

        /**
         * PlayerInfo nickname.
         * @member {string} nickname
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.nickname = "";

        /**
         * PlayerInfo gold.
         * @member {number|Long} gold
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof game.PlayerInfo
         * @static
         * @param {game.IPlayerInfo=} [properties] Properties to set
         * @returns {game.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerInfo
         * @static
         * @param {game.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userid != null && Object.hasOwnProperty.call(message, "userid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userid);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gold);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerInfo
         * @static
         * @param {game.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userid = reader.int32();
                    break;
                case 2:
                    message.index = reader.int32();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.gold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof game.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userid != null && message.hasOwnProperty("userid"))
                if (!$util.isInteger(message.userid))
                    return "userid: integer expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PlayerInfo)
                return object;
            var message = new $root.game.PlayerInfo();
            if (object.userid != null)
                message.userid = object.userid | 0;
            if (object.index != null)
                message.index = object.index | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerInfo
         * @static
         * @param {game.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userid = 0;
                object.index = 0;
                object.nickname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
            }
            if (message.userid != null && message.hasOwnProperty("userid"))
                object.userid = message.userid;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof game.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    game.PlayerInfos = (function() {

        /**
         * Properties of a PlayerInfos.
         * @memberof game
         * @interface IPlayerInfos
         * @property {Array.<game.IPlayerInfo>|null} [player] PlayerInfos player
         */

        /**
         * Constructs a new PlayerInfos.
         * @memberof game
         * @classdesc Represents a PlayerInfos.
         * @implements IPlayerInfos
         * @constructor
         * @param {game.IPlayerInfos=} [properties] Properties to set
         */
        function PlayerInfos(properties) {
            this.player = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfos player.
         * @member {Array.<game.IPlayerInfo>} player
         * @memberof game.PlayerInfos
         * @instance
         */
        PlayerInfos.prototype.player = $util.emptyArray;

        /**
         * Creates a new PlayerInfos instance using the specified properties.
         * @function create
         * @memberof game.PlayerInfos
         * @static
         * @param {game.IPlayerInfos=} [properties] Properties to set
         * @returns {game.PlayerInfos} PlayerInfos instance
         */
        PlayerInfos.create = function create(properties) {
            return new PlayerInfos(properties);
        };

        /**
         * Encodes the specified PlayerInfos message. Does not implicitly {@link game.PlayerInfos.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerInfos
         * @static
         * @param {game.IPlayerInfos} message PlayerInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.player.length)
                for (var i = 0; i < message.player.length; ++i)
                    $root.game.PlayerInfo.encode(message.player[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerInfos message, length delimited. Does not implicitly {@link game.PlayerInfos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerInfos
         * @static
         * @param {game.IPlayerInfos} message PlayerInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfos message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerInfos} PlayerInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayerInfos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.game.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerInfos} PlayerInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfos message.
         * @function verify
         * @memberof game.PlayerInfos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (var i = 0; i < message.player.length; ++i) {
                    var error = $root.game.PlayerInfo.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerInfos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerInfos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerInfos} PlayerInfos
         */
        PlayerInfos.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PlayerInfos)
                return object;
            var message = new $root.game.PlayerInfos();
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".game.PlayerInfos.player: array expected");
                message.player = [];
                for (var i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".game.PlayerInfos.player: object expected");
                    message.player[i] = $root.game.PlayerInfo.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerInfos
         * @static
         * @param {game.PlayerInfos} message PlayerInfos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.player = [];
            if (message.player && message.player.length) {
                object.player = [];
                for (var j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.game.PlayerInfo.toObject(message.player[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerInfos to JSON.
         * @function toJSON
         * @memberof game.PlayerInfos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfos;
    })();

    game.QuestionData = (function() {

        /**
         * Properties of a QuestionData.
         * @memberof game
         * @interface IQuestionData
         * @property {number|null} [id] QuestionData id
         * @property {string|null} [question] QuestionData question
         * @property {string|null} [selection] QuestionData selection
         */

        /**
         * Constructs a new QuestionData.
         * @memberof game
         * @classdesc Represents a QuestionData.
         * @implements IQuestionData
         * @constructor
         * @param {game.IQuestionData=} [properties] Properties to set
         */
        function QuestionData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuestionData id.
         * @member {number} id
         * @memberof game.QuestionData
         * @instance
         */
        QuestionData.prototype.id = 0;

        /**
         * QuestionData question.
         * @member {string} question
         * @memberof game.QuestionData
         * @instance
         */
        QuestionData.prototype.question = "";

        /**
         * QuestionData selection.
         * @member {string} selection
         * @memberof game.QuestionData
         * @instance
         */
        QuestionData.prototype.selection = "";

        /**
         * Creates a new QuestionData instance using the specified properties.
         * @function create
         * @memberof game.QuestionData
         * @static
         * @param {game.IQuestionData=} [properties] Properties to set
         * @returns {game.QuestionData} QuestionData instance
         */
        QuestionData.create = function create(properties) {
            return new QuestionData(properties);
        };

        /**
         * Encodes the specified QuestionData message. Does not implicitly {@link game.QuestionData.verify|verify} messages.
         * @function encode
         * @memberof game.QuestionData
         * @static
         * @param {game.IQuestionData} message QuestionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.question != null && Object.hasOwnProperty.call(message, "question"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.question);
            if (message.selection != null && Object.hasOwnProperty.call(message, "selection"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.selection);
            return writer;
        };

        /**
         * Encodes the specified QuestionData message, length delimited. Does not implicitly {@link game.QuestionData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.QuestionData
         * @static
         * @param {game.IQuestionData} message QuestionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuestionData message from the specified reader or buffer.
         * @function decode
         * @memberof game.QuestionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.QuestionData} QuestionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.QuestionData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.question = reader.string();
                    break;
                case 3:
                    message.selection = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuestionData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.QuestionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.QuestionData} QuestionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuestionData message.
         * @function verify
         * @memberof game.QuestionData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuestionData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.question != null && message.hasOwnProperty("question"))
                if (!$util.isString(message.question))
                    return "question: string expected";
            if (message.selection != null && message.hasOwnProperty("selection"))
                if (!$util.isString(message.selection))
                    return "selection: string expected";
            return null;
        };

        /**
         * Creates a QuestionData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.QuestionData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.QuestionData} QuestionData
         */
        QuestionData.fromObject = function fromObject(object) {
            if (object instanceof $root.game.QuestionData)
                return object;
            var message = new $root.game.QuestionData();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.question != null)
                message.question = String(object.question);
            if (object.selection != null)
                message.selection = String(object.selection);
            return message;
        };

        /**
         * Creates a plain object from a QuestionData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.QuestionData
         * @static
         * @param {game.QuestionData} message QuestionData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuestionData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.question = "";
                object.selection = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.question != null && message.hasOwnProperty("question"))
                object.question = message.question;
            if (message.selection != null && message.hasOwnProperty("selection"))
                object.selection = message.selection;
            return object;
        };

        /**
         * Converts this QuestionData to JSON.
         * @function toJSON
         * @memberof game.QuestionData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuestionData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuestionData;
    })();

    game.QuestionAnswer = (function() {

        /**
         * Properties of a QuestionAnswer.
         * @memberof game
         * @interface IQuestionAnswer
         * @property {number|null} [index] QuestionAnswer index
         */

        /**
         * Constructs a new QuestionAnswer.
         * @memberof game
         * @classdesc Represents a QuestionAnswer.
         * @implements IQuestionAnswer
         * @constructor
         * @param {game.IQuestionAnswer=} [properties] Properties to set
         */
        function QuestionAnswer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuestionAnswer index.
         * @member {number} index
         * @memberof game.QuestionAnswer
         * @instance
         */
        QuestionAnswer.prototype.index = 0;

        /**
         * Creates a new QuestionAnswer instance using the specified properties.
         * @function create
         * @memberof game.QuestionAnswer
         * @static
         * @param {game.IQuestionAnswer=} [properties] Properties to set
         * @returns {game.QuestionAnswer} QuestionAnswer instance
         */
        QuestionAnswer.create = function create(properties) {
            return new QuestionAnswer(properties);
        };

        /**
         * Encodes the specified QuestionAnswer message. Does not implicitly {@link game.QuestionAnswer.verify|verify} messages.
         * @function encode
         * @memberof game.QuestionAnswer
         * @static
         * @param {game.IQuestionAnswer} message QuestionAnswer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionAnswer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            return writer;
        };

        /**
         * Encodes the specified QuestionAnswer message, length delimited. Does not implicitly {@link game.QuestionAnswer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.QuestionAnswer
         * @static
         * @param {game.IQuestionAnswer} message QuestionAnswer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionAnswer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuestionAnswer message from the specified reader or buffer.
         * @function decode
         * @memberof game.QuestionAnswer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.QuestionAnswer} QuestionAnswer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionAnswer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.QuestionAnswer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuestionAnswer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.QuestionAnswer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.QuestionAnswer} QuestionAnswer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionAnswer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuestionAnswer message.
         * @function verify
         * @memberof game.QuestionAnswer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuestionAnswer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            return null;
        };

        /**
         * Creates a QuestionAnswer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.QuestionAnswer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.QuestionAnswer} QuestionAnswer
         */
        QuestionAnswer.fromObject = function fromObject(object) {
            if (object instanceof $root.game.QuestionAnswer)
                return object;
            var message = new $root.game.QuestionAnswer();
            if (object.index != null)
                message.index = object.index | 0;
            return message;
        };

        /**
         * Creates a plain object from a QuestionAnswer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.QuestionAnswer
         * @static
         * @param {game.QuestionAnswer} message QuestionAnswer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuestionAnswer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.index = 0;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this QuestionAnswer to JSON.
         * @function toJSON
         * @memberof game.QuestionAnswer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuestionAnswer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuestionAnswer;
    })();

    game.QuestionResult = (function() {

        /**
         * Properties of a QuestionResult.
         * @memberof game
         * @interface IQuestionResult
         * @property {number|null} [user] QuestionResult user
         * @property {boolean|null} [right] QuestionResult right
         * @property {number|null} [selection] QuestionResult selection
         * @property {number|null} [rightindex] QuestionResult rightindex
         * @property {number|null} [score] QuestionResult score
         */

        /**
         * Constructs a new QuestionResult.
         * @memberof game
         * @classdesc Represents a QuestionResult.
         * @implements IQuestionResult
         * @constructor
         * @param {game.IQuestionResult=} [properties] Properties to set
         */
        function QuestionResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuestionResult user.
         * @member {number} user
         * @memberof game.QuestionResult
         * @instance
         */
        QuestionResult.prototype.user = 0;

        /**
         * QuestionResult right.
         * @member {boolean} right
         * @memberof game.QuestionResult
         * @instance
         */
        QuestionResult.prototype.right = false;

        /**
         * QuestionResult selection.
         * @member {number} selection
         * @memberof game.QuestionResult
         * @instance
         */
        QuestionResult.prototype.selection = 0;

        /**
         * QuestionResult rightindex.
         * @member {number} rightindex
         * @memberof game.QuestionResult
         * @instance
         */
        QuestionResult.prototype.rightindex = 0;

        /**
         * QuestionResult score.
         * @member {number} score
         * @memberof game.QuestionResult
         * @instance
         */
        QuestionResult.prototype.score = 0;

        /**
         * Creates a new QuestionResult instance using the specified properties.
         * @function create
         * @memberof game.QuestionResult
         * @static
         * @param {game.IQuestionResult=} [properties] Properties to set
         * @returns {game.QuestionResult} QuestionResult instance
         */
        QuestionResult.create = function create(properties) {
            return new QuestionResult(properties);
        };

        /**
         * Encodes the specified QuestionResult message. Does not implicitly {@link game.QuestionResult.verify|verify} messages.
         * @function encode
         * @memberof game.QuestionResult
         * @static
         * @param {game.IQuestionResult} message QuestionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.user);
            if (message.right != null && Object.hasOwnProperty.call(message, "right"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.right);
            if (message.selection != null && Object.hasOwnProperty.call(message, "selection"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.selection);
            if (message.rightindex != null && Object.hasOwnProperty.call(message, "rightindex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rightindex);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified QuestionResult message, length delimited. Does not implicitly {@link game.QuestionResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.QuestionResult
         * @static
         * @param {game.IQuestionResult} message QuestionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuestionResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.QuestionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.QuestionResult} QuestionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.QuestionResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = reader.int32();
                    break;
                case 2:
                    message.right = reader.bool();
                    break;
                case 3:
                    message.selection = reader.int32();
                    break;
                case 4:
                    message.rightindex = reader.int32();
                    break;
                case 5:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuestionResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.QuestionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.QuestionResult} QuestionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuestionResult message.
         * @function verify
         * @memberof game.QuestionResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuestionResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user"))
                if (!$util.isInteger(message.user))
                    return "user: integer expected";
            if (message.right != null && message.hasOwnProperty("right"))
                if (typeof message.right !== "boolean")
                    return "right: boolean expected";
            if (message.selection != null && message.hasOwnProperty("selection"))
                if (!$util.isInteger(message.selection))
                    return "selection: integer expected";
            if (message.rightindex != null && message.hasOwnProperty("rightindex"))
                if (!$util.isInteger(message.rightindex))
                    return "rightindex: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        /**
         * Creates a QuestionResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.QuestionResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.QuestionResult} QuestionResult
         */
        QuestionResult.fromObject = function fromObject(object) {
            if (object instanceof $root.game.QuestionResult)
                return object;
            var message = new $root.game.QuestionResult();
            if (object.user != null)
                message.user = object.user | 0;
            if (object.right != null)
                message.right = Boolean(object.right);
            if (object.selection != null)
                message.selection = object.selection | 0;
            if (object.rightindex != null)
                message.rightindex = object.rightindex | 0;
            if (object.score != null)
                message.score = object.score | 0;
            return message;
        };

        /**
         * Creates a plain object from a QuestionResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.QuestionResult
         * @static
         * @param {game.QuestionResult} message QuestionResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuestionResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = 0;
                object.right = false;
                object.selection = 0;
                object.rightindex = 0;
                object.score = 0;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.right != null && message.hasOwnProperty("right"))
                object.right = message.right;
            if (message.selection != null && message.hasOwnProperty("selection"))
                object.selection = message.selection;
            if (message.rightindex != null && message.hasOwnProperty("rightindex"))
                object.rightindex = message.rightindex;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            return object;
        };

        /**
         * Converts this QuestionResult to JSON.
         * @function toJSON
         * @memberof game.QuestionResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuestionResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuestionResult;
    })();

    game.PlayerScore = (function() {

        /**
         * Properties of a PlayerScore.
         * @memberof game
         * @interface IPlayerScore
         * @property {number|null} [index] PlayerScore index
         * @property {number|null} [score] PlayerScore score
         */

        /**
         * Constructs a new PlayerScore.
         * @memberof game
         * @classdesc Represents a PlayerScore.
         * @implements IPlayerScore
         * @constructor
         * @param {game.IPlayerScore=} [properties] Properties to set
         */
        function PlayerScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerScore index.
         * @member {number} index
         * @memberof game.PlayerScore
         * @instance
         */
        PlayerScore.prototype.index = 0;

        /**
         * PlayerScore score.
         * @member {number} score
         * @memberof game.PlayerScore
         * @instance
         */
        PlayerScore.prototype.score = 0;

        /**
         * Creates a new PlayerScore instance using the specified properties.
         * @function create
         * @memberof game.PlayerScore
         * @static
         * @param {game.IPlayerScore=} [properties] Properties to set
         * @returns {game.PlayerScore} PlayerScore instance
         */
        PlayerScore.create = function create(properties) {
            return new PlayerScore(properties);
        };

        /**
         * Encodes the specified PlayerScore message. Does not implicitly {@link game.PlayerScore.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerScore
         * @static
         * @param {game.IPlayerScore} message PlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified PlayerScore message, length delimited. Does not implicitly {@link game.PlayerScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerScore
         * @static
         * @param {game.IPlayerScore} message PlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerScore message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerScore} PlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayerScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerScore} PlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerScore message.
         * @function verify
         * @memberof game.PlayerScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        /**
         * Creates a PlayerScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerScore} PlayerScore
         */
        PlayerScore.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PlayerScore)
                return object;
            var message = new $root.game.PlayerScore();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.score != null)
                message.score = object.score | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerScore
         * @static
         * @param {game.PlayerScore} message PlayerScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.index = 0;
                object.score = 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            return object;
        };

        /**
         * Converts this PlayerScore to JSON.
         * @function toJSON
         * @memberof game.PlayerScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerScore;
    })();

    game.PlayerScores = (function() {

        /**
         * Properties of a PlayerScores.
         * @memberof game
         * @interface IPlayerScores
         * @property {Array.<game.IPlayerScore>|null} [scores] PlayerScores scores
         */

        /**
         * Constructs a new PlayerScores.
         * @memberof game
         * @classdesc Represents a PlayerScores.
         * @implements IPlayerScores
         * @constructor
         * @param {game.IPlayerScores=} [properties] Properties to set
         */
        function PlayerScores(properties) {
            this.scores = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerScores scores.
         * @member {Array.<game.IPlayerScore>} scores
         * @memberof game.PlayerScores
         * @instance
         */
        PlayerScores.prototype.scores = $util.emptyArray;

        /**
         * Creates a new PlayerScores instance using the specified properties.
         * @function create
         * @memberof game.PlayerScores
         * @static
         * @param {game.IPlayerScores=} [properties] Properties to set
         * @returns {game.PlayerScores} PlayerScores instance
         */
        PlayerScores.create = function create(properties) {
            return new PlayerScores(properties);
        };

        /**
         * Encodes the specified PlayerScores message. Does not implicitly {@link game.PlayerScores.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerScores
         * @static
         * @param {game.IPlayerScores} message PlayerScores message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScores.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scores != null && message.scores.length)
                for (var i = 0; i < message.scores.length; ++i)
                    $root.game.PlayerScore.encode(message.scores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerScores message, length delimited. Does not implicitly {@link game.PlayerScores.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerScores
         * @static
         * @param {game.IPlayerScores} message PlayerScores message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScores.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerScores message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerScores
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerScores} PlayerScores
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScores.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayerScores();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.scores && message.scores.length))
                        message.scores = [];
                    message.scores.push($root.game.PlayerScore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerScores message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerScores
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerScores} PlayerScores
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScores.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerScores message.
         * @function verify
         * @memberof game.PlayerScores
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerScores.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scores != null && message.hasOwnProperty("scores")) {
                if (!Array.isArray(message.scores))
                    return "scores: array expected";
                for (var i = 0; i < message.scores.length; ++i) {
                    var error = $root.game.PlayerScore.verify(message.scores[i]);
                    if (error)
                        return "scores." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerScores message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerScores
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerScores} PlayerScores
         */
        PlayerScores.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PlayerScores)
                return object;
            var message = new $root.game.PlayerScores();
            if (object.scores) {
                if (!Array.isArray(object.scores))
                    throw TypeError(".game.PlayerScores.scores: array expected");
                message.scores = [];
                for (var i = 0; i < object.scores.length; ++i) {
                    if (typeof object.scores[i] !== "object")
                        throw TypeError(".game.PlayerScores.scores: object expected");
                    message.scores[i] = $root.game.PlayerScore.fromObject(object.scores[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerScores message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerScores
         * @static
         * @param {game.PlayerScores} message PlayerScores
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerScores.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.scores = [];
            if (message.scores && message.scores.length) {
                object.scores = [];
                for (var j = 0; j < message.scores.length; ++j)
                    object.scores[j] = $root.game.PlayerScore.toObject(message.scores[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerScores to JSON.
         * @function toJSON
         * @memberof game.PlayerScores
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerScores.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerScores;
    })();

    game.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof game
         * @interface IGameResult
         * @property {boolean|null} [win] GameResult win
         * @property {number|null} [gold] GameResult gold
         */

        /**
         * Constructs a new GameResult.
         * @memberof game
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {game.IGameResult=} [properties] Properties to set
         */
        function GameResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResult win.
         * @member {boolean} win
         * @memberof game.GameResult
         * @instance
         */
        GameResult.prototype.win = false;

        /**
         * GameResult gold.
         * @member {number} gold
         * @memberof game.GameResult
         * @instance
         */
        GameResult.prototype.gold = 0;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @function create
         * @memberof game.GameResult
         * @static
         * @param {game.IGameResult=} [properties] Properties to set
         * @returns {game.GameResult} GameResult instance
         */
        GameResult.create = function create(properties) {
            return new GameResult(properties);
        };

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link game.GameResult.verify|verify} messages.
         * @function encode
         * @memberof game.GameResult
         * @static
         * @param {game.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.win);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gold);
            return writer;
        };

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link game.GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameResult
         * @static
         * @param {game.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.win = reader.bool();
                    break;
                case 2:
                    message.gold = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResult message.
         * @function verify
         * @memberof game.GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.win != null && message.hasOwnProperty("win"))
                if (typeof message.win !== "boolean")
                    return "win: boolean expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            return null;
        };

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameResult} GameResult
         */
        GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameResult)
                return object;
            var message = new $root.game.GameResult();
            if (object.win != null)
                message.win = Boolean(object.win);
            if (object.gold != null)
                message.gold = object.gold | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameResult
         * @static
         * @param {game.GameResult} message GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.win = false;
                object.gold = 0;
            }
            if (message.win != null && message.hasOwnProperty("win"))
                object.win = message.win;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            return object;
        };

        /**
         * Converts this GameResult to JSON.
         * @function toJSON
         * @memberof game.GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResult;
    })();

    return game;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.Login = (function() {

        /**
         * Properties of a Login.
         * @memberof user
         * @interface ILogin
         * @property {string|null} [name] Login name
         * @property {string|null} [pwd] Login pwd
         */

        /**
         * Constructs a new Login.
         * @memberof user
         * @classdesc Represents a Login.
         * @implements ILogin
         * @constructor
         * @param {user.ILogin=} [properties] Properties to set
         */
        function Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Login name.
         * @member {string} name
         * @memberof user.Login
         * @instance
         */
        Login.prototype.name = "";

        /**
         * Login pwd.
         * @member {string} pwd
         * @memberof user.Login
         * @instance
         */
        Login.prototype.pwd = "";

        /**
         * Creates a new Login instance using the specified properties.
         * @function create
         * @memberof user.Login
         * @static
         * @param {user.ILogin=} [properties] Properties to set
         * @returns {user.Login} Login instance
         */
        Login.create = function create(properties) {
            return new Login(properties);
        };

        /**
         * Encodes the specified Login message. Does not implicitly {@link user.Login.verify|verify} messages.
         * @function encode
         * @memberof user.Login
         * @static
         * @param {user.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.pwd != null && Object.hasOwnProperty.call(message, "pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            return writer;
        };

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link user.Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.Login
         * @static
         * @param {user.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @function decode
         * @memberof user.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Login message.
         * @function verify
         * @memberof user.Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            return null;
        };

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.Login} Login
         */
        Login.fromObject = function fromObject(object) {
            if (object instanceof $root.user.Login)
                return object;
            var message = new $root.user.Login();
            if (object.name != null)
                message.name = String(object.name);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            return message;
        };

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.Login
         * @static
         * @param {user.Login} message Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.pwd = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            return object;
        };

        /**
         * Converts this Login to JSON.
         * @function toJSON
         * @memberof user.Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Login;
    })();

    user.LoginSuccess = (function() {

        /**
         * Properties of a LoginSuccess.
         * @memberof user
         * @interface ILoginSuccess
         * @property {string|null} [name] LoginSuccess name
         * @property {number|null} [id] LoginSuccess id
         * @property {number|Long|null} [gold] LoginSuccess gold
         */

        /**
         * Constructs a new LoginSuccess.
         * @memberof user
         * @classdesc Represents a LoginSuccess.
         * @implements ILoginSuccess
         * @constructor
         * @param {user.ILoginSuccess=} [properties] Properties to set
         */
        function LoginSuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginSuccess name.
         * @member {string} name
         * @memberof user.LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.name = "";

        /**
         * LoginSuccess id.
         * @member {number} id
         * @memberof user.LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.id = 0;

        /**
         * LoginSuccess gold.
         * @member {number|Long} gold
         * @memberof user.LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginSuccess instance using the specified properties.
         * @function create
         * @memberof user.LoginSuccess
         * @static
         * @param {user.ILoginSuccess=} [properties] Properties to set
         * @returns {user.LoginSuccess} LoginSuccess instance
         */
        LoginSuccess.create = function create(properties) {
            return new LoginSuccess(properties);
        };

        /**
         * Encodes the specified LoginSuccess message. Does not implicitly {@link user.LoginSuccess.verify|verify} messages.
         * @function encode
         * @memberof user.LoginSuccess
         * @static
         * @param {user.ILoginSuccess} message LoginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.gold);
            return writer;
        };

        /**
         * Encodes the specified LoginSuccess message, length delimited. Does not implicitly {@link user.LoginSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginSuccess
         * @static
         * @param {user.ILoginSuccess} message LoginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginSuccess} LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.gold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginSuccess} LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginSuccess message.
         * @function verify
         * @memberof user.LoginSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginSuccess} LoginSuccess
         */
        LoginSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginSuccess)
                return object;
            var message = new $root.user.LoginSuccess();
            if (object.name != null)
                message.name = String(object.name);
            if (object.id != null)
                message.id = object.id | 0;
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginSuccess
         * @static
         * @param {user.LoginSuccess} message LoginSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
            return object;
        };

        /**
         * Converts this LoginSuccess to JSON.
         * @function toJSON
         * @memberof user.LoginSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginSuccess;
    })();

    user.ErrorInfo = (function() {

        /**
         * Properties of an ErrorInfo.
         * @memberof user
         * @interface IErrorInfo
         * @property {number|null} [code] ErrorInfo code
         * @property {string|null} [message] ErrorInfo message
         */

        /**
         * Constructs a new ErrorInfo.
         * @memberof user
         * @classdesc Represents an ErrorInfo.
         * @implements IErrorInfo
         * @constructor
         * @param {user.IErrorInfo=} [properties] Properties to set
         */
        function ErrorInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorInfo code.
         * @member {number} code
         * @memberof user.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.code = 0;

        /**
         * ErrorInfo message.
         * @member {string} message
         * @memberof user.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.message = "";

        /**
         * Creates a new ErrorInfo instance using the specified properties.
         * @function create
         * @memberof user.ErrorInfo
         * @static
         * @param {user.IErrorInfo=} [properties] Properties to set
         * @returns {user.ErrorInfo} ErrorInfo instance
         */
        ErrorInfo.create = function create(properties) {
            return new ErrorInfo(properties);
        };

        /**
         * Encodes the specified ErrorInfo message. Does not implicitly {@link user.ErrorInfo.verify|verify} messages.
         * @function encode
         * @memberof user.ErrorInfo
         * @static
         * @param {user.IErrorInfo} message ErrorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link user.ErrorInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.ErrorInfo
         * @static
         * @param {user.IErrorInfo} message ErrorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof user.ErrorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.ErrorInfo} ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.ErrorInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.ErrorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.ErrorInfo} ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorInfo message.
         * @function verify
         * @memberof user.ErrorInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.ErrorInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.ErrorInfo} ErrorInfo
         */
        ErrorInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.user.ErrorInfo)
                return object;
            var message = new $root.user.ErrorInfo();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.ErrorInfo
         * @static
         * @param {user.ErrorInfo} message ErrorInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ErrorInfo to JSON.
         * @function toJSON
         * @memberof user.ErrorInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrorInfo;
    })();

    user.EnterGame = (function() {

        /**
         * Properties of an EnterGame.
         * @memberof user
         * @interface IEnterGame
         * @property {number|null} [gameid] EnterGame gameid
         */

        /**
         * Constructs a new EnterGame.
         * @memberof user
         * @classdesc Represents an EnterGame.
         * @implements IEnterGame
         * @constructor
         * @param {user.IEnterGame=} [properties] Properties to set
         */
        function EnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterGame gameid.
         * @member {number} gameid
         * @memberof user.EnterGame
         * @instance
         */
        EnterGame.prototype.gameid = 0;

        /**
         * Creates a new EnterGame instance using the specified properties.
         * @function create
         * @memberof user.EnterGame
         * @static
         * @param {user.IEnterGame=} [properties] Properties to set
         * @returns {user.EnterGame} EnterGame instance
         */
        EnterGame.create = function create(properties) {
            return new EnterGame(properties);
        };

        /**
         * Encodes the specified EnterGame message. Does not implicitly {@link user.EnterGame.verify|verify} messages.
         * @function encode
         * @memberof user.EnterGame
         * @static
         * @param {user.IEnterGame} message EnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameid != null && Object.hasOwnProperty.call(message, "gameid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameid);
            return writer;
        };

        /**
         * Encodes the specified EnterGame message, length delimited. Does not implicitly {@link user.EnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.EnterGame
         * @static
         * @param {user.IEnterGame} message EnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof user.EnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.EnterGame} EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.EnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.EnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.EnterGame} EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterGame message.
         * @function verify
         * @memberof user.EnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                if (!$util.isInteger(message.gameid))
                    return "gameid: integer expected";
            return null;
        };

        /**
         * Creates an EnterGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.EnterGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.EnterGame} EnterGame
         */
        EnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.user.EnterGame)
                return object;
            var message = new $root.user.EnterGame();
            if (object.gameid != null)
                message.gameid = object.gameid | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.EnterGame
         * @static
         * @param {user.EnterGame} message EnterGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameid = 0;
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                object.gameid = message.gameid;
            return object;
        };

        /**
         * Converts this EnterGame to JSON.
         * @function toJSON
         * @memberof user.EnterGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGame;
    })();

    return user;
})();

module.exports = $root;
