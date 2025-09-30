import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AccordionSection = () => {
  const info = [
    {
      title: 'Private consultations ',
      description:
        'Maximizing your access plans to suit  all your subscribers to suit all youro suit  all your subscribers to suit all your subscribers yo... lorem4o suit  all your subscribers to suit all your subscribers yo... lorem4 subscribers yo...'
    },
    {
      title: 'Private consultations just ',
      description:
        'Maximizing your o suit  all your subscribers to suit all your subscribers yo... lorem4o suit  all your subscribers to suit all your subscribers yo... lorem4access plans to suit  all your subscribers to suit all your subscribers yo...'
    },
    {
      title: 'Private consultations requests',
      description:
        'Maximizing your access plans to suit  all your subscribers to suit all your subscribers yo...o suit  all your subscribers to suit all your subscribers yo... lorem4o suit  all your subscribers to suit all your subscribers yo... lorem4 lorem4'
    }
  ];

  return (
    <div className="p-4 sm:px-22 space-y-12 py-12">
      <p className="text-2xl sm:text-4xl text-center sm:text-start font-bold">Information</p>
      <div className="w-full flex flex-col sm:flex-row gap-12">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={info[0].title}
        >
          {info.map((item, index) => (
            <AccordionItem
              key={index}
              value={item.title}
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionSection;
