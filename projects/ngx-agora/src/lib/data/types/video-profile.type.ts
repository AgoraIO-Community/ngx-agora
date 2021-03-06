/**
 * Video profiles to set an Agora.io Stream that will affect resolution, fps, and bitrate.
 *
 * @remark
 * - Whether 1080 resolution or above can be supported depends on the device.
 *   If the device cannot support 1080p, the actual frame rate is lower than the one listed in the table.
 *   Agora optimizes the video on low-end devices.
 * - With the update of web browsers, this table might not reflect all the supported profiles for each browser.
 *   The actual support is subject to the device and web browser version.
 * - Some versions of some web browsers might not support all the video profiles listed in the table.
 *   In this case, we recommend you use the mainstream video profiles (the ones with the _1 suffix in the above table).
 * - The Safari browser does not support modifying the video frame rate (30 fps by default).
 *   If you set a frame rate other than 30 fps on Safari, the browser may change or reject your setting.
 * - Due to limitations of some devices and browsers, the resolution you set may fail to take effect and get adjusted by the browser.
 *   In this case, billings are calculated based on the actual resolution.
 *
 * @see [Table](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.stream.html#setvideoprofile) for more details.
 */
export type VideoProfile =
  | '120p_1'
  | '120p_3'
  | '180p_1'
  | '180p_3'
  | '180p_4'
  | '240p_1'
  | '240p_3'
  | '240p_4'
  | '360p_1'
  | '360p_3'
  | '360p_4'
  | '360p_6'
  | '360p_7'
  | '360p_8'
  | '360p_9'
  | '360p_10'
  | '360p_11'
  | '480p_1'
  | '480p_2'
  | '480p_3'
  | '480p_4'
  | '480p_6'
  | '480p_8'
  | '480p_9'
  | '480p_10'
  | '720p_1'
  | '720p_2'
  | '720p_3'
  | '720p_5'
  | '720p_6'
  | '1080p_1'
  | '1080p_2'
  | '1080p_3'
  | '1080p_5'
  | '1440p'
  | '1440p_1'
  | '1440p_2'
  | '4K_1'
  | '4K_3';
