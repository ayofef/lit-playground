import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./profile-image";
import "./profile-bio/profile-bio-element";
import "./profile-stat/profile-stat-element";

@customElement("profile-element-success-state")
export class ProfileElementSuccessState extends LitElement {
    static styles = css`
        .profile-wrapper {
            display: flex;
            align-items: flex-start;
        }

        .profile-bio-wrapper {
            margin-left: 20px;
            width: 100%;
            margin-top: -20px;
            max-width: 400px;
        }
    `;

    render() {
        return html` <div class="profile-wrapper">
            <profile-image-element></profile-image-element>
            <div class="profile-bio-wrapper">
                <profile-bio-element></profile-bio-element>
                <profile-stat-element></profile-stat-element>
            </div>
        </div>`;
    }
}
