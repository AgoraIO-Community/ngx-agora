export interface AudioEffectOptions {
  /**
   * The number of playback loops (only supported on Chrome 65 and later).
   *
   * A positive integer. The value range is `[1,10000]`. The default value is 1.
   */
  cycle?: number;
  /**
   * The URL of the online audio effect file.
   *
   * The URL must contain ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
   * Supported audio formats: MP3, AAC, and other audio formats depending on the browser.
   */
  filePath: string;
  /**
   * The ID of the specified audio effect.
   *
   * A positive integer. The value range is `[1,10000]`. Each audio effect has a unique ID.
   * If the audio effect is preloaded into the memory through the
   * [preloadEffect](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.stream.html#preloadeffect)
   * method, ensure that the soundId value is set to the same value as in
   * [preloadEffect](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.stream.html#preloadeffect).
   */
  soundId: number;
}
