import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const cardData = [
  {
    title: 'Card Tile 1',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad consequatur minima laboriosam?'
  },
  {
    title: 'Card Tile 2',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad consequatur minima laboriosam?'
  },
  {
    title: 'Card Tile 3',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad consequatur minima laboriosam?'
  }
];

const CardSection = () => {
  return (
    <div className="padding_ space-y-12 spce-y-6 bg-gradient-to-b from-[#B3CFFE]/50 via-white to-white">
      <p className=" text-3xl sm:text-4xl sm:font-bold sm:text-start">Say Something</p>
      <div className="w-full flex flex-col sm:flex-row gap-12">
        {cardData.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
