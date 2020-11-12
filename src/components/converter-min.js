// SteamIDConverter.js
// by Horse M.D.
//
// Converts Steam's various SteamID formats between each other.
// Based off of information found at https://developer.valvesoftware.com/wiki/SteamID and
// some experimentation of my own ^^.
//
// Requires peterolson's BigInteger.js library - https://github.com/peterolson/BigInteger.js
var bigInt = require("big-integer");
var SteamIDConverter={BASE_NUM:bigInt("76561197960265728"),REGEX_STEAMID64:/^[0-9]{17}$/,REGEX_STEAMID:/^STEAM_[0-5]:[01]:\d+$/,REGEX_STEAMID3:/^\[U:1:[0-9]+\]$/,
toSteamID64:
function(t){
    if(!t||"string"!=typeof t)return!1;
    if(this.isSteamID3(t))t=this.fromSteamID3(t);
    else if(!this.isSteamID(t))
    throw new TypeError("Parameter must be a SteamID (e.g. STEAM_0:1:912783)");
    var e=t.split(":"),i=this.BASE_NUM,r=e[2],n=e[1];
    return r&&n?i.plus(2*r).plus(n).toString():!1},
};
