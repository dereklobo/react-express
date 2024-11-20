// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('http://localhost:9000/nasa', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
        {
            "id": 2096,
            "sol": 2,
            "camera": {
              "id": 26,
              "name": "NAVCAM",
              "rover_id": 5,
              "full_name": "Navigation Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00002/opgs/edr/ncam/NLA_397671934EDR_F0010008AUT_04096M_.JPG",
            "earth_date": "2012-08-08",
            "rover": {
              "id": 5,
              "name": "Curiosity",
              "landing_date": "2012-08-06",
              "launch_date": "2011-11-26",
              "status": "active",
              "max_sol": 4102,
              "max_date": "2024-02-19",
              "total_photos": 695670,
              "cameras": [
                {
                  "name": "FHAZ",
                  "full_name": "Front Hazard Avoidance Camera"
                },
                {
                  "name": "NAVCAM",
                  "full_name": "Navigation Camera"
                },
                {
                  "name": "MAST",
                  "full_name": "Mast Camera"
                },
                {
                  "name": "CHEMCAM",
                  "full_name": "Chemistry and Camera Complex"
                },
                {
                  "name": "MAHLI",
                  "full_name": "Mars Hand Lens Imager"
                },
                {
                  "name": "MARDI",
                  "full_name": "Mars Descent Imager"
                },
                {
                  "name": "RHAZ",
                  "full_name": "Rear Hazard Avoidance Camera"
                }
              ]
            }
          })
  }),
]