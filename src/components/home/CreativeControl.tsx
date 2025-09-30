'use client';
import VideoCard from './VideoCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VideoCard2 from './VideoCard2';

const creative = [
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' },
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' },
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' }
];

const CreativeControl = () => {
  return (
    <div className="p-4 sm:px-22 space-y-12 py-12 flex flex-col sm:flex-row gap-6">
      <div className="min-h-full sm:basis-1/3 flex justify-center place-items-center text-center">
        <p className="sm:my-auto text-start">
          Complete Creative Control to turn your passion into bussiness Control into business Control Passion into
          business
        </p>
      </div>
      <div className="sm:basis-1/3">
        <VideoCard2
          video={{
            name: 'wom',
            link: 'https://www.pexels.com/download/video/5958064/',
            title: 'woman'
          }}
        />
      </div>
      <div className="flex flex-col sm:basis-1/3 justify-center items-center ">
        {creative.map((item, index) => (
          <Card
            key={index}
            className="shadow-none"
          >
            <CardHeader>
              <CardTitle className="text-base text-primary">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreativeControl;
