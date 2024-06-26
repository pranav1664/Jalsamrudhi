import { Grid } from '@mui/material';
import { forwardRef } from 'react';
// import { Link } from "react-router-dom";

const AboutUs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <Grid
        sx={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <div className="p-7">
          <div className="bg-slate-100 rounded-md shadow-md mx-2 p-4 mt-10">
            <div className="text-3xl font-bold text-center">
              Jal Samruddha Nashik
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div className="text-lg mt-5">
                In an earnest endeavor to combat the looming threat of water
                scarcity, the Jalsamruddha Nashik Abhiyaan has emerged as a
                beacon of hope, rallying widespread support across diverse
                sectors. Led by the dynamic leadership of District Collector
                Jalaj Sharma, this initiative commenced on April 15 with the
                noble objective of ensuring water prosperity for Nashik. At the
                inaugural ceremony held amidst the tranquil surroundings of
                Gangapur Dam's Gangavarhe village, Collector Jalaj Sharma
                underscored the indispensable role of each Nashik resident in
                shaping the success of this ambitious campaign.
              </div>
              <div className="text-lg mt-5">
                The launch of the 'Jal Samruddha Nashik' campaign marks a
                significant stride towards water conservation and augmentation
                efforts in the region. Organized by voluntary organizations in
                collaboration with the district administration, the campaign
                commenced at Gangapur Dam in Gangavarhe on Tuesday, April 16,
                under the leadership of District Magistrate Jalaj Sharma. he
                campaign aims to bolster water conservation efforts by
                increasing the capacity of reservoirs through the implementation
                of the 'Gaal-Mukta Dharan, Gaal-Yukt Shivar' scheme initiated by
                the state government.
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
});

export default AboutUs;
