import * as signalR from '@microsoft/signalr';

let connection;

export const startSignalR = (
  hubUrl = '',
  token = '',
  onNotificationReceived = () => {}
) => {
  // CONNECTION CONFIGURATION
  connection = new signalR.HubConnectionBuilder()
    .withUrl(hubUrl, {
      accessTokenFactory: () => token,
    })
    .configureLogging(signalR.LogLevel.Information)
    .build();

  // CONNECTION START
  connection.start().catch((err) => console.error(err));

  // EVENT LISTENERS
  connection.on('Receive', (data) => onNotificationReceived(data));
};

// STOP CONNECTION
export const stopSignalR = () => {
  if (connection) {
    connection.stop();
  }
};
