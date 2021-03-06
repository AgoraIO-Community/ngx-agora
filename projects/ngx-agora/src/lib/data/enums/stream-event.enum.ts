/**
 * /**
 * Events that the Agora.io SDK `Stream.on()` function recognizes.
 *
 * If the API changes faster than the library, a quick type override can help bypass compiler errors:
 *
 * @example
 * localStream.on('new-event' as ClientEvent, (data) => {})
 */
export enum StreamEvent {
  /** Occurs when the user gives access to the camera and microphone. */
  MediaAccessAllowed = 'accessAllowed',
  /** Occurs when the user denies access to the camera and microphone. */
  MediaAccessDenied = 'accessDenied',
  /** Occurs when screen-sharing stops. */
  ScreenSharingStopped = 'stopScreenSharing',
  /**
   * Occurs when the video track no longer provides data to the stream.
   *
   * Possible reasons include device removal and deauthorization.
   *
   * @see [Media​Stream​Track​.onended](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onended).
   */
  VideoTrackEnded = 'videoTrackEnded',
  /**
   * Occurs when the audio track no longer provides data to the stream.
   *
   * Possible reasons include device removal and deauthorization.
   *
   * @see [Media​Stream​Track​.onended](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onended).
   */
  AudioTrackEnded = 'audioTrackEnded',
  /**
   * Occurs when the audio mixing stream playback starts/resumes.
   *
   * @remark
   * This callback is triggered when the audio mixing stream is loaded and starts playing,
   * or when the paused audio mixing stream resumes playing.
   */
  AudioMixingPlayed = 'audioMixingPlayed',
  /** Occurs when the last audio mixing stream playback finishes. */
  AudioMixingFinished = 'audioMixingFinished',
  /**
   * Occurs when the stream playback status changes.
   *
   * On Windows, frequent DOM manipulations might cause the browser to pause the Chrome player.
   * To avoid this, you can listen for this event and call the
   * [Stream.resume](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.stream.html#resume)
   * method to resume the playback.
   *
   * This callback has the following properties.
   *
   * - isErrorState: Whether or not the playback fails.
   *  - true: The playback fails.
   *  - false: The playback is normal.
   *
   * - mediaType: The player type.
   *  - "audio": Audio player.
   *  - "video": Video player.
   *
   * - status: The playback status.
   *  - "play": Playing.
   *  - "aborted": The player is removed before the stream is played successfully.
   *  - "paused": The player is stopped.
   *
   * - reason: The reason why the playback status changes. Usually, this value is the event that triggers the status change.
   *   Possible values include the following:
   *  - "playing": The playback starts.
   *    See [HTMLMedia​Element: playing event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playing_event).
   *  - "stalled": The failure might be caused by the browser policy.
   *    See [stalled event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/stalled_event).
   *  - "pause": The stream playback might be paused by the user.
   *    See [pause event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause_event).
   *  - "suspend": The failure might be caused by the browser policy.
   *    See [suspend event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/suspend_event).
   *  - "canplay": Some browsers automatically stop the playback when the playback window is not displayed on the screen.
   *    See [canplay event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event).
   *  - "timer": The playback failure is caused by an unknown reason and captured by the internal timer.
   *
   * @example
   * stream.on("player-status-change", function(evt) {
   *   if (evt.isErrorState && evt.status === "paused") {
   *       console.error(`Stream is paused unexpectedly. Trying to resume...`);
   *       stream.resume().then(function() {
   *           console.log(`Stream is resumed successfully`);
   *       }).catch(function(e) {
   *           console.error(`Failed to resume stream. Error ${e.name} Reason ${e.message}`);
   *       });
   *   }
   * });
   */
  StreamPlaybackStatusChanged = 'player-status-change',
}
