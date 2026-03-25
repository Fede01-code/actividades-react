import ReportConfigModal from "../reports/components/reportConfigModal"
import { DataTable, Button } from "@/shared/components"
import { UserColumns } from "../table/UserColumns"
import { users } from "@/data/user/users"
import { useState } from "react"

export default function ListUserPage() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  return (
    <div className="p-6">

      <h1 className="text-xl font-semibold mb-4">
        Usuarios
      </h1>
      <Button
        variant= "primary"
        onClick= {() => setIsReportModalOpen(true)}
      >
        Generar reporte
      </Button>

      <ReportConfigModal
        isOpen= {isReportModalOpen}
        onClose= {() => setIsReportModalOpen(false)}
      />

      <DataTable
        data={users}
        columns={UserColumns}
      />

    </div>
  )
}
