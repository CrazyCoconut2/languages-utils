
export enum LANGUAGES_CODES {
    en,
    es,
    fr,
    pt,
    it,
    de,
    pl,
    sv,
    da,
    nw,
    // Add more languages as we progress
}

export type LANGUAGE_CODE = keyof typeof LANGUAGES_CODES;

export enum LANGUAGES_NAMES {
    en = 'English',
    es = 'Español',
    fr = 'Français',
    pt = 'Português',
    'pt-BR' = 'Português',
    it = 'Italiano',
    de = 'Deutsch',
    pl = 'Polski',
    sv = 'Svenska',
    da = 'Dansk',
    nw = 'Norsk',
}

export enum NETFLIX_LANGUAGE_MAPPING {
    en = 'en',
    es = 'es',
    fr = 'fr',
    pt = 'pt',
    'pt-BR' = 'pt',
    it = 'it',
    de = 'de',
    pl = 'pl',
    sv = 'sv',
    da = 'da',
    nw = 'nw',
}

export enum CONTEXT_REVERSO_LANGUAGE_MAPPING {
    en = 'english',
    es = 'spanish',
    fr = 'french',
    pt = 'portuguese',
    'pt-BR' = 'portuguese',
    it = 'italian',
    de = 'dutch',
    pl = 'polish',
    sv = 'swedish',
    da = 'danish',
    nw = 'norwegian',
}

export enum GOOGLE_TRANSLATE_LANGUAGE_MAPPING {
    en = 'en',
    es = 'es',
    fr = 'fr',
    pt = 'pt',
    'pt-BR' = 'pt',
    it = 'it',
    de = 'de',
    pl = 'pl',
    sv = 'sv',
    da = 'da',
    nw = 'no',
}

export enum SpeechRecognitionLanguages {
    // English
    EN_US = 'en-US',
    EN_GB = 'en-GB',
    EN_AU = 'en-AU',
    EN_CA = 'en-CA',
    EN_IN = 'en-IN',
    EN_IE = 'en-IE',
    EN_NZ = 'en-NZ',
    EN_ZA = 'en-ZA',

    // Spanish
    ES_ES = 'es-ES',
    ES_MX = 'es-MX',
    ES_AR = 'es-AR',
    ES_CO = 'es-CO',
    ES_CL = 'es-CL',
    ES_PE = 'es-PE',
    ES_VE = 'es-VE',

    // French
    FR_FR = 'fr-FR',
    FR_CA = 'fr-CA',
    FR_BE = 'fr-BE',
    FR_CH = 'fr-CH',

    // German
    DE_DE = 'de-DE',
    DE_AT = 'de-AT',
    DE_CH = 'de-CH',

    // Portuguese
    PT_BR = 'pt-BR',
    PT_PT = 'pt-PT',

    // Chinese
    ZH_CN = 'zh-CN',
    ZH_TW = 'zh-TW',
    ZH_HK = 'zh-HK',

    // Arabic
    AR_EG = 'ar-EG',
    AR_SA = 'ar-SA',
    AR_AE = 'ar-AE',
    AR_JO = 'ar-JO',
    AR_LB = 'ar-LB',
    AR_MA = 'ar-MA',

    // Japanese
    JA_JP = 'ja-JP',

    // Korean
    KO_KR = 'ko-KR',

    // Italian
    IT_IT = 'it-IT',
    IT_CH = 'it-CH',

    // Russian
    RU_RU = 'ru-RU',

    // Dutch
    NL_NL = 'nl-NL',
    NL_BE = 'nl-BE',

    // Hindi
    HI_IN = 'hi-IN',

    // Bengali
    BN_IN = 'bn-IN',

    // Turkish
    TR_TR = 'tr-TR',

    // Polish
    PL_PL = 'pl-PL',

    // Swedish
    SV_SE = 'sv-SE',

    // Danish
    DA_DK = 'da-DK',

    // Norwegian
    NO_NO = 'no-NO',

    // Finnish
    FI_FI = 'fi-FI',

    // Greek
    EL_GR = 'el-GR',

    // Hebrew
    HE_IL = 'he-IL',

    // Thai
    TH_TH = 'th-TH',

    // Czech
    CS_CZ = 'cs-CZ',

    // Hungarian
    HU_HU = 'hu-HU',

    // Vietnamese
    VI_VN = 'vi-VN',

    // Indonesian
    ID_ID = 'id-ID',

    // Malay
    MS_MY = 'ms-MY',

    // Filipino
    FIL_PH = 'fil-PH',

    // Ukrainian
    UK_UA = 'uk-UA',
}

export enum SPEECH_RECOGNITION_LANGUAGE_MAPPING {
    en = 'en-US',
    es = 'es-ES',
    fr = 'fr-FR',
    pt = 'pt-BR',
    it = 'it-IT',
    de = 'de-DE',
    pl = 'pl-PL',
    sv = 'sv-SE',
    da = 'da-DK',
    nw = 'no-NO',
};

export enum ASSEMBLY_LANGUAGE_MAPPING {
    en = 'en_us',
    es = 'es',
    fr = 'fr',
    pt = 'pt',
    it = 'it',
    de = 'nl',
    pl = 'pl',
    sv = 'sv',
    da = 'da',
    nw = 'no',
}