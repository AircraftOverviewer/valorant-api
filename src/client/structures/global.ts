export interface BaseResult {
	status: 200 | 400 | 404;
	error: string;
	data: unknown;
}

export interface BaseOptions {
	language?: Language;
	uuid?: string;
}

export type Language =
	| 'ar-AE'
	| 'de-DE'
	| 'en-US'
	| 'es-ES'
	| 'es-MX'
	| 'fr-FR'
	| 'id-ID'
	| 'it-IT'
	| 'ja-JP'
	| 'ko-KR'
	| 'pl-PL'
	| 'pt-BR'
	| 'ru-RU'
	| 'th-TH'
	| 'tr-TR'
	| 'vi-VN'
	| 'zh-CN'
	| 'zh-TW';
