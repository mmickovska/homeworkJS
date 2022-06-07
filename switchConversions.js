const convert = (type, value) => {
  switch (type) {
    case "km2m":
      return value * 0.6214;
    case "m2km":
      return value * 1.6;
    case "lbs2kg":
      return value * 0.45359237;
    case "kg2lbs":
      return value * 2.2;
    case "i2cm":
      return value * 2.54;
    case "cm2i":
      return value / 2.54;
    case "eur2gbp":
      return value / 1.15;
    case "gbp2eur":
      return value * 1.15
    case "mkd2usd":
      return value * 0.017349;
    case "usd2mkd":
      return value / 0.017349;
    default:
      console.log("Cannot convert!");
      break;
  }
};


let unit = 10;
let res = convert("usd2mkd", unit);
console.log("Convert result:", res);
