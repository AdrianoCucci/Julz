/*
    Copyright 2020 Adriano Cucci

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

/**
 * A structure for containing information about HTTP responses, such as any data, errors, and status codes returned.
 * @param T An object to typecast any returned data as.
 */
export interface HttpResponse<T> {
    /**
     * Any data returned from the response, if applicable.
     */
    data?: T;

    /**
     * An error message created if the response was evaluated as unsuccessful.
     */
    error?: string;

    /**
     * The HTTP status code of the response.
     * 1XX = Informational.
     * 2XX = Successful.
     * 3XX = Redirection.
     * 4XX = Client-side error.
     * 5XX = Server-side error.
     */
    statusCode: number;
}