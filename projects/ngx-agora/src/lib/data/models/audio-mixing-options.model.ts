/**
 * Audio mixing settings.
 */
export interface AudioMixingOptions {
  /**
   *  Whether or not to store the audio mixing file in the cache.
   *
   * - `true`: (default) store the audio mixing file in the cache to speed up mixing this file the next time.
   * - `false`: do not store the audio mixing file in the cache to save RAM.
   */
  cacheResource?: boolean;
  /**
   * Number of playback loops (only supports Chrome 65+)
   * A positive integer. The value range is `[1,10000]`. The default value is `1`.
   */
  cycle?: number;
  /**
   * Path of the online audio file to mix. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
   * Supported audio formats: mp3, aac, and other audio formats depending on the browser.
   */
  filePath: string;
  /**
   * Whether the audio mixing file loops infinitely.
   *
   * - `true`: The audio mixing file loops infinitely. Do not use this option if cycle is specified.
   * - `false`: (Default) Disables the infinite loops.
   */
  loop?: boolean;
  /**
   * Sets the playback position (ms) of the audio mixing file. An integer, and the value range is `[0,100000000]`.
   * If you need to play the file from the beginning, set this paramter to `0`.
   */
  playTime: number;
  /**
   * Whether the online audio file replaces the local audio stream.
   * - `true`: The content of the online audio file replaces the audio stream from the microphone.
   * - `false`: (Default) The online audio file is mixed with the audio stream from the microphone.
   *
   * @remark
   * Safari does not support this parameter.
   */
  replace?: boolean;
}
