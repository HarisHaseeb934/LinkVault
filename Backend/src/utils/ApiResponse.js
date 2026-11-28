class ApiResponse {
  constructor(message = "Success", data = null, statusCode) {
    this.statusCode = statusCode;
    this.success = success < 400;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
