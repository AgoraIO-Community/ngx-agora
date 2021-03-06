/**
 * Whether to receive the video or audio data independently by the video and audio parameters.
 *
 * @remark
 * `video` and `audio` cannot be set as `false` at the same time.
 * If you need to stop subscribing to the stream, call
 * [Client.unsubscribe](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.client.html#unsubscribe) instead.
 * Safari does not support independent subscription. Set options as null for Safari, otherwise the
 * `SAFARI_NOT_SUPPORTED_FOR_TRACK_SUBSCRIPTION` error occurs.
 */
export interface SubscribeOptions {
  /**
   * Whether to receive the audio data.
   * - true: (Default) Receives the audio data.
   * - false: Not receives the audio data.
   */
  audio?: boolean;
  /**
   * Whether to receive the video data.
   * - true: (Default) Receives the video data.
   * - false: Not receives the video data.
   */
  video?: boolean;
}
