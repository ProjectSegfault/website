<script>
    import { browser } from "$app/env";
    import { locale } from "../store";  
 
    if (browser) {
        const lang = navigator.language;

        if (lang.includes("en")) {
            window.location.href = "en";
            locale.set("en");
        } else {
            window.location.href = "en";
            locale.set("en");
        }
    }
</script>