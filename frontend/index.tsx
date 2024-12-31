import { Millennium } from '@steambrew/client';

let steamID = -1;

async function getSteamId() {
    const loginUsers = await SteamClient.User.GetLoginUsers();

    return loginUsers[0].avatarUrl.match(/avatarcache\/(\d+)/)[1];
}

Millennium.exposeObj({
    getSteamId: () => steamID,
});

// Entry point on the front end of your plugin
export default async function PluginMain() {
    steamID = await getSteamId();
}