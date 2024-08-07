import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import UserData from '~/data/data';
import { tokens } from '~/theme';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

function Table() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'image',
      headerName: 'IMAGE',
      flex: 1,
      type: 'string',
      renderCell: (params) => (
        <img
          src={params.value}
          alt="user"
          style={{ width: '100%', height: 'auto' }}
        />
      ),
    },
    {
      field: 'surname',
      headerName: 'SURNAME',
      flex: 1,
      type: 'string',
    },
    {
      field: 'username',
      headerName: 'USERNAME',
      flex: 1,
      type: 'string',

    },
    {
      field: 'email',
      headerName: 'EMAIL',
      flex: 1,
      headerAlign: 'left',
      type: 'string',

    },
    {
      field: 'password',
      headerName: 'PASSWORD',
      flex: 1,
      headerAlign: 'left',
      type: 'string',

    },
    {
      field: 'checkPassword',
      headerName: 'CHECKPASSWORD',
      flex: 1,
      headerAlign: 'left',
      type: 'string',

    },
    {
      field: 'access',
      headerName: 'ACCESS',
      flex: 1,
      type: 'string',
      headerAlign: 'left',
      renderCell: (params) => {
        const { access } = params.row;
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{ backgroundColor: 
                access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
              }}
          >
            {access === 'admin' && <AdminPanelSettingsIcon />}
            {access === 'security' && <SecurityOutlinedIcon />}
            {access === 'user' && <VerifiedUserOutlinedIcon />}
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box>
        <DataGrid rows={UserData} columns={columns} 
        slots={{toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  );
}

export default Table;
