import { TableHeaders } from '../TableHeaders';
import { compositionFields } from '../types';
import { Row } from '../Row';

const BodyCompositionTable = () => {
  return (
    <div className="p-5">
      <TableHeaders fields={compositionFields} />
      <div className="max-w-[675px] overflow-y-scroll">
        <table cellPadding={10}>
          <thead>
            <Row rowName="date" table="bodyComposition" />
          </thead>
          <tbody>
            {compositionFields.map((field) => (
              <Row key={field.name} rowName={field.name} table="bodyComposition" />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { BodyCompositionTable };
