import { Tokens } from "./tokens";

export const semanticTokens = {
    colors : {
        'app-bg' : {
            default : Tokens.colors.light["page-bg"],
            _dark : Tokens.colors.dark["page-bg"]
        },
        'user-bg' : {
            default : Tokens.colors.light["user-bg"],
            _dark : Tokens.colors.dark["user-bg"]
        },
        'text-color' : {
            default : Tokens.colors.light["text-color"],
            _dark : Tokens.colors.dark["text-color"]
        },
        'subtext-color' : {
            default : Tokens.colors.light["subtext-color"],
            _dark : Tokens.colors.dark["subtext-color"],
        },
        'user-hover-bg' : {
            default : Tokens.colors.light["user-hover-bg"],
            _dark : Tokens.colors.dark["user-hover-bg"]
        },
        'button-bg':{
            default : Tokens.colors.light["button-bg"],
            _dark : Tokens.colors.dark["button-bg"]
        },
        'active-user-text-color' : {
            default : Tokens.colors.light["active-user-text-color"],
            _dark : Tokens.colors.dark["active-user-text-color"]
        }
    }
}