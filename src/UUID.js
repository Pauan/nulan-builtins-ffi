export { _order as uuid_order } from "./String";

// Canonical UUID
// http://en.wikipedia.org/wiki/Universally_unique_identifier
const uuid_regexp = /^[0-9a-f]{8}\-[0-9a-f]{4}\-[12345][0-9a-f]{3}\-[89ab][0-9a-f]{3}\-[0-9a-f]{12}$/;

export const uuid = (x) => {
  if (uuid_regexp["test"](x)) {
    return x;
  } else {
    // TODO better error message on failure
    throw new Error("Expected lower-case UUID (http://en.wikipedia.org/wiki/Universally_unique_identifier), but got \"" + x + "\"");
  }
};

export const UUID_to_String = (x) => x;

export const String_to_UUID = (x, some, none) => {
  if (uuid_regexp["test"](x)) {
    return some(x);
  } else {
    return none;
  }
};
