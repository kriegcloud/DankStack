import { getTableColumns } from "drizzle-orm";
import { Table } from "drizzle-orm/table";

const getTableInfo = <T extends Table>(table: T) => {
  const cols = getTableColumns(table);
  const TableMap = new Map();

  Object.entries(cols).forEach(([name, info]) => {
    Object.entries(info).forEach(([key, value]) => {
      if (key === "config") {
        TableMap.set(name, {
          name: value.name,
          dataType: value.dataType,
          isUnique: value.isUnique,
          notNull: value.notNull,
          uniqueName: value.uniqueName,
        });
      }
    });
  });

  return TableMap;
};

export default getTableInfo;
