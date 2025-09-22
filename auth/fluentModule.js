import {
    provideFluentDesignSystem,
    fluentButton,
    fluentTextField,
    fluentCard,
    fluentDivider,
    fluentProgressRing,
    baseLayerLuminance,
    StandardLuminance
} from "https://cdn.jsdelivr.net/npm/@fluentui/web-components@2.6.1/dist/web-components.min.js";

provideFluentDesignSystem().register(
    fluentButton(),
    fluentTextField(),
    fluentCard(),
    fluentDivider(),
    fluentProgressRing()
);

window.addEventListener("DOMContentLoaded", () => {
    const provider = document.querySelector("fluent-design-system-provider");
    const mode = document.documentElement.dataset.theme;
    baseLayerLuminance.setValueFor(
        provider,
        mode === "dark" ? StandardLuminance.DarkMode : StandardLuminance.LightMode
    );
});