export const useUrlParams = () => {
    var myURL = document.location;
    document.location = myURL + "?a=parameter";
    return {}
}