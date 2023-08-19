import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Grid = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "userId", headerName: "User ID", width: 90 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center font-semibold mb-4">
        Fetch Data from Api and display in tabular form
      </h1>
      <div className="h-[400px] w-full border rounded-lg shadow-lg bg-white">
        <DataGrid
          rows={posts}
          columns={columns}
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
    </div>
  );
};

export default Grid;
