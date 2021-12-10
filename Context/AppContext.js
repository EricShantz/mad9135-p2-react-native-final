import React, { createContext, useState, useContext } from 'react';

const PlayersContext = createContext();

function PlayersProvider({ children }) {
  const [players, setPlayers] = useState([]);
  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
}

function usePlayersContext() {
  const context = useContext(PlayersContext);
  if (!context)
    throw new Error('usePlayersContext must be used within a PlayersProvider');
  return context;
}

export { usePlayersContext, PlayersProvider };
