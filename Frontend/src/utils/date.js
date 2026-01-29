export default function dateFormater() {
    let formater = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit"
    })
    return formater;
}