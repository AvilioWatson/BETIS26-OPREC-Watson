export const FRAME_WIDTH = 1440;
export const FRAME_HEIGHT = 6009;

export type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export const BOXES = {
  heroTitle: { x: 587.424, y: 236.02, w: 267.723, h: 39.96 },
  heroSubtitle: { x: 451.958, y: 303.36, w: 537.207, h: 50 },
  heroButtonExplore: { x: 480, y: 393, w: 225, h: 54 },
  heroButtonRegister: { x: 726, y: 392, w: 236, h: 56 },
  aboutTitle: { x: 82.592, y: 1443.31, w: 440.87, h: 32.07 },
  aboutBody: { x: 120.66, y: 1546.06, w: 645.148, h: 184.34 },
  aboutPrevious: { x: 129.908, y: 1840.52, w: 163, h: 72.33 },
  aboutApplicantsValue: { x: 380.063, y: 1846.41, w: 71.85, h: 23.91 },
  aboutApplicantsLabel: { x: 367.714, y: 1887.72, w: 96.551, h: 15.46 },
  aboutAcceptedValue: { x: 629.441, y: 1846.41, w: 43.879, h: 23.87 },
  aboutAcceptedLabel: { x: 570.698, y: 1887.78, w: 162.608, h: 15.4 },
  timelineTitle: { x: 586.913, y: 2118.36, w: 265.306, h: 32.02 },
  timelineWebinarTitle: { x: 367.2, y: 2585.68, w: 134.199, h: 16.13 },
  timelineWebinarDate: { x: 367, y: 2619.3, w: 109.173, h: 15 },
  timelineBeTalksTitle: { x: 517.517, y: 3145.68, w: 75.771, h: 15.98 },
  timelineBeTalksDate: { x: 517.373, y: 3179.3, w: 126.961, h: 15 },
  timelineMainEventTitle: { x: 733.32, y: 2889.68, w: 105.898, h: 16.01 },
  timelineMainEventDate: { x: 733.2, y: 2923.3, w: 114.227, h: 19.5 },
  timelineGrandTitle: { x: 116.224, y: 3359.6, w: 157.679, h: 20.52 },
  timelineGrandDate: { x: 116, y: 3394.3, w: 143.255, h: 15 },
  eventsTitle: { x: 82.496, y: 3803.36, w: 214.327, h: 31.92 },
  eventsBeTalksTitle: { x: 406.016, y: 3938.52, w: 122.868, h: 23.98 },
  eventsBeTalksBody: { x: 404.52, y: 3991.78, w: 876.36, h: 104.62 },
  eventsWebinarTitle: { x: 405.8, y: 4358.52, w: 201.299, h: 24.19 },
  eventsWebinarBody: { x: 404.46, y: 4411.78, w: 879.66, h: 132.62 },
  eventsButtonPrimary1: { x: 404, y: 4146, w: 451, h: 56 },
  eventsButtonSecondary1: { x: 868, y: 4147, w: 449, h: 54 },
  eventsButtonPrimary2: { x: 404, y: 4566, w: 451, h: 56 },
  eventsButtonSecondary2: { x: 868, y: 4567, w: 449, h: 54 },
  registerTitle: { x: 600.043, y: 4872.01, w: 240.247, h: 35.9 },
  registerHeading: { x: 620.033, y: 5036.2, w: 201.31, h: 48.6 },
  registerFooter: { x: 615.426, y: 5528.16, w: 208.901, h: 40.24 },
  labelName: { x: 321.232, y: 5126.16, w: 123.709, h: 16.16 },
  labelNickname: { x: 321.232, y: 5221.93, w: 81.696, h: 17.79 },
  labelPhone: { x: 321.232, y: 5324.16, w: 74.477, h: 11.98 },
  labelEmail: { x: 739.232, y: 5125.82, w: 136.372, h: 16.5 },
  labelPassword: { x: 739.232, y: 5224.82, w: 40.894, h: 12.32 },
  labelPasswordConfirm: { x: 739.232, y: 5323.78, w: 163.555, h: 12.36 },
  placeholderName: { x: 367.123, y: 5172.36, w: 63.978, h: 14.01 },
  placeholderNickname: { x: 367.123, y: 5271.36, w: 63.978, h: 14.01 },
  placeholderPhone: { x: 367.123, y: 5370.36, w: 63.978, h: 14.01 },
  placeholderEmail: { x: 785.123, y: 5172.36, w: 63.978, h: 14.01 },
  placeholderPassword: { x: 785.123, y: 5271.36, w: 63.978, h: 14.01 },
  placeholderPasswordConfirm: { x: 785.123, y: 5370.36, w: 63.978, h: 14.01 },
  inputName: { x: 318, y: 5126.16, w: 386, h: 79.84 },
  inputNickname: { x: 318, y: 5221.93, w: 386, h: 83.07 },
  inputPhone: { x: 318, y: 5324.16, w: 386, h: 79.84 },
  inputEmail: { x: 736, y: 5125.82, w: 386, h: 80.18 },
  inputPassword: { x: 736, y: 5224.82, w: 386, h: 80.18 },
  inputPasswordConfirm: { x: 736, y: 5323.78, w: 386, h: 80.22 },
  registerButton: { x: 529, y: 5434, w: 382, h: 56 },
  footerBrand: { x: 196.667, y: 5819.68, w: 101.125, h: 31.83 },
  footerTagline: { x: 195.68, y: 5862.43, w: 205.271, h: 16.96 },
  footerAbout: { x: 1008.38, y: 5809.32, w: 93.84, h: 11.84 },
  footerTalk: { x: 1144.69, y: 5809.32, w: 79.88, h: 11.84 },
  footerShop: { x: 1266.7, y: 5809.32, w: 88.35, h: 15.09 },
  footerAddress: { x: 873.45, y: 5865.78, w: 426.03, h: 41.2 },
  footerEmail: { x: 1087.07, y: 5939.64, w: 212.08, h: 13.48 },
} satisfies Record<string, Box>;

export const toPercent = (value: number, base: number) =>
  `${(value / base) * 100}%`;

export const boxStyle = (box: Box) => ({
  left: toPercent(box.x, FRAME_WIDTH),
  top: toPercent(box.y, FRAME_HEIGHT),
  width: toPercent(box.w, FRAME_WIDTH),
  height: toPercent(box.h, FRAME_HEIGHT),
});
