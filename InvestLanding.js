var map = new Datamap({
    element: document.getElementById('usmap'),
    scope: 'usa',
    fills: {
        defaultFill: '#007bff' // Any hex, color name or rgb/rgba value
    },
    geographyConfig: {
        popupOnHover: false
    }
});
