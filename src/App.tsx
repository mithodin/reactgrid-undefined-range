import {Column, ReactGrid, Row} from "@silevis/reactgrid";

const columns: Column[] = [
    {
        columnId: 'A'
    },
    {
        columnId: 'B'
    }
];
const rows: Row[] = [
    {
        rowId: '1',
        cells: [
            {
                type: 'text',
                text: 'A1'
            },
            {
                type: 'text',
                text: 'B1'
            }
        ]
    },
    {
        rowId: '2',
        cells: [
            {
                type: 'text',
                text: 'A2'
            },
            {
                type: 'text',
                text: 'B2'
            }
        ]
    }
];

function App() {
  return (
    <>
        <ReactGrid columns={columns} rows={rows} stickyLeftColumns={2} />
    </>
  )
}

export default App
