const TypeValidator = require('../config/type-validator');

const ProviderDetails = [
    {
        "logo_path": "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
        "provider_name": "Netflix",
        "provider_id": 8
    },
    {
        "logo_path": "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        "provider_name": "Amazon Prime Video",
        "provider_id": 119
    },
    {
        "logo_path": "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
        "provider_name": "Disney Plus",
        "provider_id": 337
    },
    {
        "logo_path": "/2ioan5BX5L9tz4fIGU93blTeFhv.jpg",
        "provider_name": "wavve",
        "provider_id": 356
    },
    {
        "logo_path": "/vXXZx0aWQtDv2klvObNugm4dQMN.jpg",
        "provider_name": "Watcha",
        "provider_id": 97
    },
    {
        "logo_path": "/6uhKBfmtzFqOcLousHwZuzcrScK.jpg",
        "provider_name": "Apple TV Plus",
        "provider_id": 350
    },
    {
        "logo_path": "/a4ciTQc27FsgdUp7PCrToHPygcw.jpg",
        "provider_name": "Naver Store",
        "provider_id": 96
    }
];

const Provider = {
    Netflix : 8,
    Amazon : 119,
    Disney : 337,
    Wavve : 356,
    Watcha : 97,
    AppleTV : 350,
    Naver : 96
}

const allProviders = [Provider.Netflix, Provider.Amazon, Provider.Disney, Provider.Wavve, Provider.Watcha, Provider.AppleTV, Provider.Naver];

class WatchProvider {

    // param : [Provider.Netflix, Provider.Amazon, Provider.Watcha ...];
    static getProviderPrams(providerList) {
        if ( Array.isArray(providerList)) {
            return providerList.map(provider => provider.toString()).join('|');
        }
        return '';
    }

    static getAllProviderParms() {
        return allProviderPath;
    }

    static getAllProviders() {
        return allProviders;
    }
}

const allProviderPath = WatchProvider.getProviderPrams(allProviders);



module.exports = { Provider, WatchProvider };