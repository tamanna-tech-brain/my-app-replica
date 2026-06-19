/** Framer CDN image URLs extracted from https://confiig.framer.website/ */
const BASE = "https://framerusercontent.com/images";

export function framerImg(path: string, width: number, height?: number) {
  const q = height ? `?width=${width}&height=${height}` : `?width=${width}`;
  return `${BASE}/${path}${q}`;
}

export const ASSETS = {
  logo: framerImg("up2vHjTZPaBwVY9lW3Ui2wf0.svg", 120, 28),
  heroPortrait: framerImg("GhldPHgKP4dJ3cYyZxY1EeG1rBs.png", 900, 1100),
  heroBg: framerImg("KF3GdPzKmVQ6uZAsKMV0MSOQ3pY.jpg", 1600, 1000),
  heroDecor: framerImg("j3RnySMiojqmIfzpUUtn6Cg.svg", 245, 176),
  speakers: {
    carlos: framerImg("uaPmZQkVVmy5U9UtiZUwqoT7Eok.png", 600, 750),
    didier: framerImg("H9yehFROyMDxnbNETe1uS2dGFo.png", 600, 750),
    jenna: framerImg("dYVjx3lvmyqEcJ0KV2eHqmFtnZg.png", 600, 750),
    doug: framerImg("yozNrW62zZ7KB9dj8pa6Zxlc.png", 600, 750),
    samantha: framerImg("tsSqidMg3nzQYtSj6ZVj82scM.png", 600, 750),
    boyd: framerImg("GhldPHgKP4dJ3cYyZxY1EeG1rBs.png", 600, 750),
  },
  gallery: [
    framerImg("UyTFKLiNA7cxYGUUpMdujKSgc.jpg", 800, 1000),
    framerImg("cwoCJZhJuWWFje66gfXyfgAK2g.jpg", 800, 1000),
    framerImg("TEKIxl7ScPzT2o4sW7bldf16QcM.jpg", 800, 1000),
    framerImg("F70ruHkL2NNE5hgqlYM3pfUu5Ag.jpg", 800, 1000),
  ],
  blog: {
    future: framerImg("nTTWD3VaptbU3dtJAE1Fu8f3bA.jpg", 1200, 750),
    vision: framerImg("nZillEljVuP2ZgIoyEd9nylB5mg.png", 1200, 750),
    human: framerImg("MQSzSbfdin6ekldk0QFx7ONE8FM.png", 1200, 750),
    autonomous: framerImg("hxZ6XObjaDr3ra2zCat7G2W0xZU.jpg", 1200, 750),
  },
  about: {
    hero: framerImg("4tuVT4NoPMbxCgcTmnpfIffY0.jpg", 1600, 900),
    wide: framerImg("X0vGHqQc4BMfE8al6DeUUJ03z3g.jpg", 1600, 900),
    team: [
      framerImg("L2dma06JvEbKoiTMSdBmzyQAvRM.png", 400, 500),
      framerImg("dkWEE36rGii191ZH2HM3ylNBWA.png", 400, 500),
      framerImg("9F2N4xKD5fXFv6yiidgWXdeEI6g.png", 400, 500),
      framerImg("Arr7KB5XZj4CfNqLKKykSkoNWws.png", 400, 500),
      framerImg("4y1p45LYlIdd76Yl0r3th65pA.png", 400, 500),
      framerImg("RjZ6V5gCLT92k0NtLl9DV34lg.png", 400, 500),
    ],
  },
  sponsorLogos: [
    framerImg("KqdIB6s5Ru8QRRrt9MjHIGRSt10.png", 678, 192),
    framerImg("ddGwl5KDOLR30oghE1y4C8NdWD4.png", 610, 192),
    framerImg("kkOINNdYaWpDxC4XIHRIPEXcs7A.png", 712, 192),
    framerImg("oyzeqnoocyKl4ZaRNoOPbZnuwo.png", 1148, 192),
    framerImg("TbmRxOZt2U0loc7XfFSjmVooM.png", 768, 192),
    framerImg("OfgzUFexaxfiuh1dIc2hxe7ywsA.png", 808, 192),
    framerImg("k0EG6MXK3MznzUmV7cp87IXDus.png", 815, 192),
    framerImg("kNvmRFEjYLsK6PibDcVHHM5LOZ4.png", 1060, 192),
    framerImg("eBvYohnaR25j91WSgxRwPlTgcTk.png", 504, 144),
    framerImg("jB5t8XsZ6JHeaxTlHFtOWzewehk.svg", 537, 316),
    framerImg("MDJ5PzrYQpmYh5uNzAXmdMDqU.svg", 498, 296),
    framerImg("i1ColBeCWdLr6kqVgGxtZA87c.svg", 437, 258),
    framerImg("i1ON99gwMqoTmx6IlVOV2gbEg.svg", 396, 193),
    framerImg("OP1sn2fmoLvpjVusfME8RRIVyw.svg", 338, 272),
    framerImg("o29coQPxJaYC7CiZzxJZkwoTqSw.svg", 267, 48),
    framerImg("oKOqQaWwYp9g3ITXrvZGUZRDWM.svg", 265, 71),
    framerImg("WtAIf7dIvXr8Tbc0JrzrKrMn2No.svg", 329, 172),
    framerImg("UMQRfLU93llb5PPitnU5iV6u2s.svg", 437, 258),
    framerImg("cRFjNng0lFmEpzOeNiBcvHrKWs.svg", 337, 337),
    framerImg("JGuPsUP5Z0VrNWZGEAiCccBtg.svg", 332, 290),
  ],
} as const;
