/**
 * Video statistics of the remote stream.
 */
export interface RemoteVideoStats {
  /**
   * End-to-end delay in ms.
   *
   * Delay from capturing to playing the video.
   */
  End2EndDelay?: string;
  /**
   * Whether the video is muted or not.
   *
   * - "1": Muted.
   * - "0": Unmuted.
   */
  MuteState?: string;
  /** Packet loss rate (%) of the remote video. */
  PacketLossRate?: string;
  /** Bitrate of the received video, in Kbps. */
  RecvBitrate?: string;
  /** Resolution height of the received video, in pixels. */
  RecvResolutionHeight?: string;
  /** Resolution width of the received video, in pixels. */
  RecvResolutionWidth?: string;
  /** Rendering frame rate of the decoded video, in fps. */
  RenderFrameRate?: string;
  /** Height (pixels) of the rendered video. */
  RenderResolutionHeight?: string;
  /** Width (pixels) of the rendered video. */
  RenderResolutionWidth?: string;
  /** Total freeze time of the received video. */
  TotalFreezeTime?: string;
  /** Total playing duration of the received video. */
  TotalPlayDuration?: string;
  /**
   * Transport delay in ms.
   *
   * Delay from sending to receiving the video.
   */
  TransportDelay?: string;
}
