// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace game. */
export namespace game {

    /** Properties of a GameMatching. */
    interface IGameMatching {

        /** GameMatching matching */
        matching?: (boolean|null);
    }

    /** Represents a GameMatching. */
    class GameMatching implements IGameMatching {

        /**
         * Constructs a new GameMatching.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameMatching);

        /** GameMatching matching. */
        public matching: boolean;

        /**
         * Creates a new GameMatching instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMatching instance
         */
        public static create(properties?: game.IGameMatching): game.GameMatching;

        /**
         * Encodes the specified GameMatching message. Does not implicitly {@link game.GameMatching.verify|verify} messages.
         * @param message GameMatching message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameMatching, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMatching message, length delimited. Does not implicitly {@link game.GameMatching.verify|verify} messages.
         * @param message GameMatching message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameMatching, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMatching message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMatching
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameMatching;

        /**
         * Decodes a GameMatching message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMatching
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameMatching;

        /**
         * Verifies a GameMatching message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMatching message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMatching
         */
        public static fromObject(object: { [k: string]: any }): game.GameMatching;

        /**
         * Creates a plain object from a GameMatching message. Also converts values to other types if specified.
         * @param message GameMatching
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameMatching, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMatching to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo userid */
        userid?: (number|null);

        /** PlayerInfo index */
        index?: (number|null);

        /** PlayerInfo nickname */
        nickname?: (string|null);

        /** PlayerInfo gold */
        gold?: (number|Long|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayerInfo);

        /** PlayerInfo userid. */
        public userid: number;

        /** PlayerInfo index. */
        public index: number;

        /** PlayerInfo nickname. */
        public nickname: string;

        /** PlayerInfo gold. */
        public gold: (number|Long);

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: game.IPlayerInfo): game.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): game.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerInfos. */
    interface IPlayerInfos {

        /** PlayerInfos player */
        player?: (game.IPlayerInfo[]|null);
    }

    /** Represents a PlayerInfos. */
    class PlayerInfos implements IPlayerInfos {

        /**
         * Constructs a new PlayerInfos.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayerInfos);

        /** PlayerInfos player. */
        public player: game.IPlayerInfo[];

        /**
         * Creates a new PlayerInfos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfos instance
         */
        public static create(properties?: game.IPlayerInfos): game.PlayerInfos;

        /**
         * Encodes the specified PlayerInfos message. Does not implicitly {@link game.PlayerInfos.verify|verify} messages.
         * @param message PlayerInfos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayerInfos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfos message, length delimited. Does not implicitly {@link game.PlayerInfos.verify|verify} messages.
         * @param message PlayerInfos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayerInfos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerInfos;

        /**
         * Decodes a PlayerInfos message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerInfos;

        /**
         * Verifies a PlayerInfos message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfos message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfos
         */
        public static fromObject(object: { [k: string]: any }): game.PlayerInfos;

        /**
         * Creates a plain object from a PlayerInfos message. Also converts values to other types if specified.
         * @param message PlayerInfos
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PlayerInfos, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfos to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuestionData. */
    interface IQuestionData {

        /** QuestionData id */
        id?: (number|null);

        /** QuestionData question */
        question?: (string|null);

        /** QuestionData selection */
        selection?: (string|null);
    }

    /** Represents a QuestionData. */
    class QuestionData implements IQuestionData {

        /**
         * Constructs a new QuestionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IQuestionData);

        /** QuestionData id. */
        public id: number;

        /** QuestionData question. */
        public question: string;

        /** QuestionData selection. */
        public selection: string;

        /**
         * Creates a new QuestionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuestionData instance
         */
        public static create(properties?: game.IQuestionData): game.QuestionData;

        /**
         * Encodes the specified QuestionData message. Does not implicitly {@link game.QuestionData.verify|verify} messages.
         * @param message QuestionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IQuestionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuestionData message, length delimited. Does not implicitly {@link game.QuestionData.verify|verify} messages.
         * @param message QuestionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IQuestionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuestionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuestionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.QuestionData;

        /**
         * Decodes a QuestionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuestionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.QuestionData;

        /**
         * Verifies a QuestionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuestionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuestionData
         */
        public static fromObject(object: { [k: string]: any }): game.QuestionData;

        /**
         * Creates a plain object from a QuestionData message. Also converts values to other types if specified.
         * @param message QuestionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.QuestionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuestionData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuestionAnswer. */
    interface IQuestionAnswer {

        /** QuestionAnswer index */
        index?: (number|null);
    }

    /** Represents a QuestionAnswer. */
    class QuestionAnswer implements IQuestionAnswer {

        /**
         * Constructs a new QuestionAnswer.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IQuestionAnswer);

        /** QuestionAnswer index. */
        public index: number;

        /**
         * Creates a new QuestionAnswer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuestionAnswer instance
         */
        public static create(properties?: game.IQuestionAnswer): game.QuestionAnswer;

        /**
         * Encodes the specified QuestionAnswer message. Does not implicitly {@link game.QuestionAnswer.verify|verify} messages.
         * @param message QuestionAnswer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IQuestionAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuestionAnswer message, length delimited. Does not implicitly {@link game.QuestionAnswer.verify|verify} messages.
         * @param message QuestionAnswer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IQuestionAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuestionAnswer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuestionAnswer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.QuestionAnswer;

        /**
         * Decodes a QuestionAnswer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuestionAnswer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.QuestionAnswer;

        /**
         * Verifies a QuestionAnswer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuestionAnswer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuestionAnswer
         */
        public static fromObject(object: { [k: string]: any }): game.QuestionAnswer;

        /**
         * Creates a plain object from a QuestionAnswer message. Also converts values to other types if specified.
         * @param message QuestionAnswer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.QuestionAnswer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuestionAnswer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuestionResult. */
    interface IQuestionResult {

        /** QuestionResult user */
        user?: (number|null);

        /** QuestionResult right */
        right?: (boolean|null);

        /** QuestionResult selection */
        selection?: (number|null);

        /** QuestionResult rightindex */
        rightindex?: (number|null);

        /** QuestionResult score */
        score?: (number|null);
    }

    /** Represents a QuestionResult. */
    class QuestionResult implements IQuestionResult {

        /**
         * Constructs a new QuestionResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IQuestionResult);

        /** QuestionResult user. */
        public user: number;

        /** QuestionResult right. */
        public right: boolean;

        /** QuestionResult selection. */
        public selection: number;

        /** QuestionResult rightindex. */
        public rightindex: number;

        /** QuestionResult score. */
        public score: number;

        /**
         * Creates a new QuestionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuestionResult instance
         */
        public static create(properties?: game.IQuestionResult): game.QuestionResult;

        /**
         * Encodes the specified QuestionResult message. Does not implicitly {@link game.QuestionResult.verify|verify} messages.
         * @param message QuestionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IQuestionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuestionResult message, length delimited. Does not implicitly {@link game.QuestionResult.verify|verify} messages.
         * @param message QuestionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IQuestionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuestionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuestionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.QuestionResult;

        /**
         * Decodes a QuestionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuestionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.QuestionResult;

        /**
         * Verifies a QuestionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuestionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuestionResult
         */
        public static fromObject(object: { [k: string]: any }): game.QuestionResult;

        /**
         * Creates a plain object from a QuestionResult message. Also converts values to other types if specified.
         * @param message QuestionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.QuestionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuestionResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerScore. */
    interface IPlayerScore {

        /** PlayerScore index */
        index?: (number|null);

        /** PlayerScore score */
        score?: (number|null);
    }

    /** Represents a PlayerScore. */
    class PlayerScore implements IPlayerScore {

        /**
         * Constructs a new PlayerScore.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayerScore);

        /** PlayerScore index. */
        public index: number;

        /** PlayerScore score. */
        public score: number;

        /**
         * Creates a new PlayerScore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerScore instance
         */
        public static create(properties?: game.IPlayerScore): game.PlayerScore;

        /**
         * Encodes the specified PlayerScore message. Does not implicitly {@link game.PlayerScore.verify|verify} messages.
         * @param message PlayerScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayerScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerScore message, length delimited. Does not implicitly {@link game.PlayerScore.verify|verify} messages.
         * @param message PlayerScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayerScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerScore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerScore;

        /**
         * Decodes a PlayerScore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerScore;

        /**
         * Verifies a PlayerScore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerScore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerScore
         */
        public static fromObject(object: { [k: string]: any }): game.PlayerScore;

        /**
         * Creates a plain object from a PlayerScore message. Also converts values to other types if specified.
         * @param message PlayerScore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PlayerScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerScore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerScores. */
    interface IPlayerScores {

        /** PlayerScores scores */
        scores?: (game.IPlayerScore[]|null);
    }

    /** Represents a PlayerScores. */
    class PlayerScores implements IPlayerScores {

        /**
         * Constructs a new PlayerScores.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayerScores);

        /** PlayerScores scores. */
        public scores: game.IPlayerScore[];

        /**
         * Creates a new PlayerScores instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerScores instance
         */
        public static create(properties?: game.IPlayerScores): game.PlayerScores;

        /**
         * Encodes the specified PlayerScores message. Does not implicitly {@link game.PlayerScores.verify|verify} messages.
         * @param message PlayerScores message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayerScores, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerScores message, length delimited. Does not implicitly {@link game.PlayerScores.verify|verify} messages.
         * @param message PlayerScores message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayerScores, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerScores message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerScores
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerScores;

        /**
         * Decodes a PlayerScores message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerScores
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerScores;

        /**
         * Verifies a PlayerScores message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerScores message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerScores
         */
        public static fromObject(object: { [k: string]: any }): game.PlayerScores;

        /**
         * Creates a plain object from a PlayerScores message. Also converts values to other types if specified.
         * @param message PlayerScores
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PlayerScores, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerScores to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult win */
        win?: (boolean|null);

        /** GameResult gold */
        gold?: (number|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameResult);

        /** GameResult win. */
        public win: boolean;

        /** GameResult gold. */
        public gold: number;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: game.IGameResult): game.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link game.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link game.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): game.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a Login. */
    interface ILogin {

        /** Login name */
        name?: (string|null);

        /** Login pwd */
        pwd?: (string|null);
    }

    /** Represents a Login. */
    class Login implements ILogin {

        /**
         * Constructs a new Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILogin);

        /** Login name. */
        public name: string;

        /** Login pwd. */
        public pwd: string;

        /**
         * Creates a new Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Login instance
         */
        public static create(properties?: user.ILogin): user.Login;

        /**
         * Encodes the specified Login message. Does not implicitly {@link user.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link user.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.Login;

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.Login;

        /**
         * Verifies a Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Login
         */
        public static fromObject(object: { [k: string]: any }): user.Login;

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @param message Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginSuccess. */
    interface ILoginSuccess {

        /** LoginSuccess name */
        name?: (string|null);

        /** LoginSuccess id */
        id?: (number|null);

        /** LoginSuccess gold */
        gold?: (number|Long|null);
    }

    /** Represents a LoginSuccess. */
    class LoginSuccess implements ILoginSuccess {

        /**
         * Constructs a new LoginSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginSuccess);

        /** LoginSuccess name. */
        public name: string;

        /** LoginSuccess id. */
        public id: number;

        /** LoginSuccess gold. */
        public gold: (number|Long);

        /**
         * Creates a new LoginSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginSuccess instance
         */
        public static create(properties?: user.ILoginSuccess): user.LoginSuccess;

        /**
         * Encodes the specified LoginSuccess message. Does not implicitly {@link user.LoginSuccess.verify|verify} messages.
         * @param message LoginSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginSuccess message, length delimited. Does not implicitly {@link user.LoginSuccess.verify|verify} messages.
         * @param message LoginSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginSuccess;

        /**
         * Decodes a LoginSuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginSuccess;

        /**
         * Verifies a LoginSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginSuccess
         */
        public static fromObject(object: { [k: string]: any }): user.LoginSuccess;

        /**
         * Creates a plain object from a LoginSuccess message. Also converts values to other types if specified.
         * @param message LoginSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ErrorInfo. */
    interface IErrorInfo {

        /** ErrorInfo code */
        code?: (number|null);

        /** ErrorInfo message */
        message?: (string|null);
    }

    /** Represents an ErrorInfo. */
    class ErrorInfo implements IErrorInfo {

        /**
         * Constructs a new ErrorInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IErrorInfo);

        /** ErrorInfo code. */
        public code: number;

        /** ErrorInfo message. */
        public message: string;

        /**
         * Creates a new ErrorInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorInfo instance
         */
        public static create(properties?: user.IErrorInfo): user.ErrorInfo;

        /**
         * Encodes the specified ErrorInfo message. Does not implicitly {@link user.ErrorInfo.verify|verify} messages.
         * @param message ErrorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link user.ErrorInfo.verify|verify} messages.
         * @param message ErrorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.ErrorInfo;

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.ErrorInfo;

        /**
         * Verifies an ErrorInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorInfo
         */
        public static fromObject(object: { [k: string]: any }): user.ErrorInfo;

        /**
         * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
         * @param message ErrorInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.ErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterGame. */
    interface IEnterGame {

        /** EnterGame gameid */
        gameid?: (number|null);
    }

    /** Represents an EnterGame. */
    class EnterGame implements IEnterGame {

        /**
         * Constructs a new EnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IEnterGame);

        /** EnterGame gameid. */
        public gameid: number;

        /**
         * Creates a new EnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGame instance
         */
        public static create(properties?: user.IEnterGame): user.EnterGame;

        /**
         * Encodes the specified EnterGame message. Does not implicitly {@link user.EnterGame.verify|verify} messages.
         * @param message EnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterGame message, length delimited. Does not implicitly {@link user.EnterGame.verify|verify} messages.
         * @param message EnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.EnterGame;

        /**
         * Decodes an EnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.EnterGame;

        /**
         * Verifies an EnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterGame
         */
        public static fromObject(object: { [k: string]: any }): user.EnterGame;

        /**
         * Creates a plain object from an EnterGame message. Also converts values to other types if specified.
         * @param message EnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.EnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
