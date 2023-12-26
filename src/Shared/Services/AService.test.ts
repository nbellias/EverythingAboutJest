import { createTestFactory } from '../../TestingFactory/testFactory';

describe('UserService', () => {
  const { service: AService, mockUniversitiesRepository, mockCountriesRepository } = createTestFactory();
  const mockUniversitiesCountry = 'Greece';
  const mockCountry = 'greece';
  
  it('should fetch Greek universities', async () => {
    
    mockUniversitiesRepository.getUniversities.mockResolvedValue(sampleGrUniversities);
    const grUnivs = await AService.fetchGreekUnivesritiesMethod();

    expect(mockUniversitiesRepository.getUniversities).toHaveBeenCalledWith(mockUniversitiesCountry);
    expect(grUnivs).toEqual(sampleGrUniversities);
  });

  it('should fetch information about Greece', async () => {
    
    mockCountriesRepository.getCountryInfo.mockResolvedValue(sampleGrInfo);
    const grInfo = await AService.fetchInfoAboutGreece();

    expect(mockCountriesRepository.getCountryInfo).toHaveBeenCalledWith(mockCountry);
    expect(grInfo).toEqual(sampleGrInfo);
  });

  it('should return the date of now', () => {
    const dateNow = AService.dateNow();

    expect(dateNow).toBeDefined();
    expect(dateNow).toBeGreaterThanOrEqual(1703591620906);
  });
  // ... more tests
});


const sampleGrInfo = [
  {
    'name': {
        'common': 'Greece',
        'official': 'Hellenic Republic',
        'nativeName': {
            'ell': {
                'official': 'Ελληνική Δημοκρατία',
                'common': 'Ελλάδα'
            }
        }
    },
    'tld': [
        '.gr'
    ],
    'cca2': 'GR',
    'ccn3': '300',
    'cca3': 'GRC',
    'cioc': 'GRE',
    'independent': true,
    'status': 'officially-assigned',
    'unMember': true,
    'currencies': {
        'EUR': {
            'name': 'Euro',
            'symbol': '€'
        }
    },
    'idd': {
        'root': '+3',
        'suffixes': [
            '0'
        ]
    },
    'capital': [
        'Athens'
    ],
    'altSpellings': [
        'GR',
        'Elláda',
        'Hellenic Republic',
        'Ελληνική Δημοκρατία'
    ],
    'region': 'Europe',
    'subregion': 'Southern Europe',
    'languages': {
        'ell': 'Greek'
    },
    'translations': {
        'ara': {
            'official': 'الجمهورية الهيلينية',
            'common': 'اليونان'
        },
        'bre': {
            'official': 'Republik Hellenek',
            'common': 'Gres'
        },
        'ces': {
            'official': 'Řecká republika',
            'common': 'Řecko'
        },
        'cym': {
            'official': 'Hellenic Republic',
            'common': 'Greece'
        },
        'deu': {
            'official': 'Hellenische Republik',
            'common': 'Griechenland'
        },
        'est': {
            'official': 'Kreeka Vabariik',
            'common': 'Kreeka'
        },
        'fin': {
            'official': 'Helleenien tasavalta',
            'common': 'Kreikka'
        },
        'fra': {
            'official': 'République hellénique',
            'common': 'Grèce'
        },
        'hrv': {
            'official': 'Helenska Republika',
            'common': 'Grčka'
        },
        'hun': {
            'official': 'Görög Köztársaság',
            'common': 'Görögország'
        },
        'ita': {
            'official': 'Repubblica ellenica',
            'common': 'Grecia'
        },
        'jpn': {
            'official': 'ギリシャ共和国',
            'common': 'ギリシャ'
        },
        'kor': {
            'official': '그리스 공화국',
            'common': '그리스'
        },
        'nld': {
            'official': 'Helleense Republiek',
            'common': 'Griekenland'
        },
        'per': {
            'official': 'جمهوری یونان',
            'common': 'یونان'
        },
        'pol': {
            'official': 'Republika Grecka',
            'common': 'Grecja'
        },
        'por': {
            'official': 'República Helénica',
            'common': 'Grécia'
        },
        'rus': {
            'official': 'Греческая Республика',
            'common': 'Греция'
        },
        'slk': {
            'official': 'Grécka republika',
            'common': 'Greécko'
        },
        'spa': {
            'official': 'República Helénica',
            'common': 'Grecia'
        },
        'srp': {
            'official': 'Хеленска Република',
            'common': 'Грчка'
        },
        'swe': {
            'official': 'Republiken Grekland',
            'common': 'Grekland'
        },
        'tur': {
            'official': 'Helen Cumhuriyeti',
            'common': 'Yunanistan'
        },
        'urd': {
            'official': 'جمہوریہ ہیلینیہ',
            'common': 'یونان'
        },
        'zho': {
            'official': '希腊共和国',
            'common': '希腊'
        }
    },
    'latlng': [
        39,
        22
    ],
    'landlocked': false,
    'borders': [
        'ALB',
        'BGR',
        'TUR',
        'MKD'
    ],
    'area': 131990,
    'demonyms': {
        'eng': {
            'f': 'Greek',
            'm': 'Greek'
        },
        'fra': {
            'f': 'Grecque',
            'm': 'Grec'
        }
    },
    'flag': '🇬🇷',
    'maps': {
        'googleMaps': 'https://goo.gl/maps/LHGcAvuRyD2iKECC6',
        'openStreetMaps': 'https://www.openstreetmap.org/relation/192307'
    },
    'population': 10715549,
    'gini': {
        '2018': 32.9
    },
    'fifa': 'GRE',
    'car': {
        'signs': [
            'GR'
        ],
        'side': 'right'
    },
    'timezones': [
        'UTC+02:00'
    ],
    'continents': [
        'Europe'
    ],
    'flags': {
        'png': 'https://flagcdn.com/w320/gr.png',
        'svg': 'https://flagcdn.com/gr.svg',
        'alt': 'The flag of Greece is composed of nine equal horizontal bands of blue alternating with white. A blue square bearing a white cross is superimposed in the canton.'
    },
    'coatOfArms': {
        'png': 'https://mainfacts.com/media/images/coats_of_arms/gr.png',
        'svg': 'https://mainfacts.com/media/images/coats_of_arms/gr.svg'
    },
    'startOfWeek': 'monday',
    'capitalInfo': {
        'latlng': [
            37.98,
            23.73
        ]
    },
    'postalCode': {
        'format': '### ##',
        'regex': '^(\\d{5})$'
    }
}
];

const sampleGrUniversities = [
  {
    name: 'American College of Greece',
    country: 'Greece',
    alpha_two_code: 'GR',
    domains: [ 'acg.gr' ],
    web_pages: [ 'http://www.acg.gr/' ],
    'state-province': null
  },
  {
    name: 'American College of Thessaloniki',
    country: 'Greece',
    alpha_two_code: 'GR',
    domains: [ 'act.edu' ],
    web_pages: [ 'http://www.act.edu/' ],
    'state-province': null
  },
]