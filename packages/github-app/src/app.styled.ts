import { css } from "lit";

export const APP_STYLES = css`
    main {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
    }

    main.dark {
        background-color: #151d30;
    }
    .app-wrapper {
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }
`;
