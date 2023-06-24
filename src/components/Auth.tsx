import { REDIRECT_URI } from "../util/constants";
import "../styles/Buttons.css";

const Auth = (): JSX.Element => {
    const url = `https://accounts.spotify.com/authorize`;
    const clientId = "8236c4f4f75b468f8b61a89d27ecd89c";
    const state = "solamipasol";
    const scope = "user-read-private%20user-read-email%20user-top-read";
    const redirectUri = REDIRECT_URI;
    const showDialogue = "true";

    const authUrl = `${url}/?client_id=${clientId}&response_type=code&state=${state}&scope=${scope}&redirect_uri=${redirectUri}&show_dialog=${showDialogue}`;

    return (
        <button class="btn-login">
            <a href={authUrl}>Log in</a>
        </button>
    );
};

export default Auth;
