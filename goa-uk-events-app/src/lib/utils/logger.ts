enum LogLevel {
  LOG = 'LOG',
  WARN = 'WARNING',
  ERROR = 'ERROR',
}

export class Logger {
  private fileName;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public get isDev() {
    return process.env.REACT_APP_NODE_ENV === 'dev';
  }

  public log(...message: any[]) {
    if (this.isDev) {
      return this.logMessage(...message);
    }
  }

  public warn(...message: any[]) {
    if (this.isDev) {
      return this.warnMessage(...message);
    }
  }

  public error(...message: any[]) {
    if (this.isDev) {
      return this.errorMessage(...message);
    }
  }

  private logMessage(...message: string[]) {
    console.log(`${LogLevel.LOG}-${this.fileName}:`, ...message);
  }

  private warnMessage(...message: string[]) {
    console.warn(`${LogLevel.WARN}-${this.fileName}:`, ...message);
  }

  private errorMessage(...message: string[]) {
    console.error(`${LogLevel.ERROR}-${this.fileName}:`, ...message);
  }
}
