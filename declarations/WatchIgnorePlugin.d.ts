/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A list of RegExps or absolute paths to directories or files that should be ignored
 */
export type WatchIgnorePlugin = (
	| string
	| {
			[k: string]: any;
	  })[];