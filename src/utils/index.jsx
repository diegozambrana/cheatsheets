export const updateQueryString = (key) => {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?lesson=${key}`;
    window.history.pushState({path:newurl},'',newurl);
}

export const getParams = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
}