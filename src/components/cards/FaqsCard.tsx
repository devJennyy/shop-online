interface Props {
  numberCount: string;
  titleHeader: string;
  details: string;
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqsCard = ({ numberCount, titleHeader, details }: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className=" flex flex-col w-full gap-3"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex flex-row gap-5 text-[#0B0D21]">
            <p>{numberCount}</p>
            <p>{titleHeader}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-[14px] font-normal text-justify pl-14 pr-14 text-[#666666]">
          {details}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex flex-row gap-5 text-[#0B0D21]">
            <p>{numberCount}</p>
            <p>{titleHeader}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-[14px] font-normal text-justify pl-14 pr-14 text-[#666666]">
          {details}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex flex-row gap-5 text-[#0B0D21]">
            <p>{numberCount}</p>
            <p>{titleHeader}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-[14px] font-normal text-justify pl-14 pr-14 text-[#666666]">
          {details}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqsCard;
