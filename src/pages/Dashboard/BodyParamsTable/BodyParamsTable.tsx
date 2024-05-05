import { TableHeaders } from '../TableHeaders';
import { paramsFields } from '../types';
import { Row } from '../Row';

const BodyParamsTable = () => {
  return (
    <div className="mb-5">
      <TableHeaders fields={paramsFields} />
      <div className="max-w-[675px] overflow-y-scroll">
        <table cellPadding={10}>
          <thead>
            <Row rowName="date" table="bodyParams" />
          </thead>
          <tbody>
            {paramsFields.map((field) => (
              <Row key={field.name} rowName={field.name} table="bodyParams" />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { BodyParamsTable };
