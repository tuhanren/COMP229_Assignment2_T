export const LocalURI = "mongodb://localhost/contactlist";
export const RemoteURI = process.env.RemoteURI;
export const HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
export const Seceret = "somesecert";
//export const RemoteURI = "mongodb+srv://tuhanren:GvCqEUPYqGYHj2fm@comp229-assignment2.xxij1.mongodb.net/contactlist?retryWrites=true&w=majority";
//export const RemoteURI = process.env.RemoteURI || "mongodb+srv://tuhanren:GvCqEUPYqGYHj2fm@comp229-assignment2.xxij1.mongodb.net/contactlist?retryWrites=true&w=majority";
//export const RemoteURI = process.env.RemoteURI;
