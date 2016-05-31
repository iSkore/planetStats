'use strict';

const
    master = {},
    planetList   = [ 'Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Vesta', 'Ceres', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto' ];

let distData     = [ 0, 579, 1082, 1496, 2279, 3533.6, 4140.2, 7783, 14290, 28710, 44980, 59150 ],
    diamData     = [ 1391.4, 4.880, 12.104, 12.756, 6.794, 0.5254, 0.9392, 142.984, 120.536, 51.118, 49.528, 2.368 ],
    massData     = [ 1.99e+30, 3.285e+23, 4.87e+24, 5.97e+24, 6.42e+23, 2.59e+20, 8.96e+20, 1.90e+27, 5.68e+26, 8.68e+25, 1.02e+26, 1.31e+22 ],
    tempData     = [ 5800, 452.00, 737.00, 287.00, 218.15, 142.70, 130.00, 125.40, 93.15, 49.15, 55.00, 55.00 ],
    daysData     = [ null, 88, 224.7, 365, 687, 1325, 1680.1, 4328, 10759, 29904, 60190, 90520 ],
    yearsData    = [ null, 0.24, 0.60, 1.0, 1.88, 3.63, 4.60, 11.86, 29.40, 84.00, 164.80, 248.00 ],
    dayRotData   = [ 587.28, 1407.6, 2784.0, 24, 24.6, 31800, 40320, 9.9, 10.5, 17.2, 16.4, 153.36 ],
    hoursRotData = [ 24.47, 58.65, 116, 1, 1.026, 1325, 1680, 0.4125, 0.43958, 0.7181, 0.683, 6.39 ],
    axialData    = [ null, 0.034, 177.3, 23.5, 25, 29, 4, 3, 26.7, 97.77, 28.32, 112.5 ],
    inclinData   = [ null, 7, 3.39, 0, 1.85, 7.14, 10.6, 1.304, 2.485, 0.773, 1.767, 17.14 ];

function createObject( x ) {

}

for( let i = 0; i < planetList.length; i++ ) {
    master[ planetList[ i ] ] = {
        'Average-Orbital-Distance': distData[ i ],
        'Diameter': diamData[ i ],
        'Mass': massData[ i ],
        'Surface-Temperature': tempData[ i ],
        'Orbital-Days': daysData[ i ],
        'Orbital-Years': yearsData[ i ],
        'Period-of-Rotation-Hours': hoursRotData[ i ],
        'Period-of-Rotation-Days': dayRotData[ i ],
        'Axial': axialData[ i ],
        'Inclination': inclinData[ i ]
    };
}
