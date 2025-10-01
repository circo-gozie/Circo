import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const creative = [
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' },
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' },
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' }
];

const CreativeControl = () => {
  return (
    <div className="padding_ space-y-12 py-12 flex flex-col sm:flex-row gap-6">
      <div className="min-h-full sm:basis-1/3 flex justify-center place-items-center text-center">
        <p className="sm:my-auto text-start">
          Complete Creative Control to turn your passion into bussiness Control into business Control Passion into
          business Control into business Control Passion into business
        </p>
      </div>
      <div className="sm:basis-1/3 flex flex-col items-center justify-center">
        <video
          src={'https://www.pexels.com/download/video/5958064/'}
          className="w-xs bg-orange-200 aspect-[9/12] rounded-xl object-cover"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="flex flex-col sm:basis-1/3 justify-center items-center h-fit">
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
