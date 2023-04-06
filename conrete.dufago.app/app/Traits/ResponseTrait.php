<?php


namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait ResponseTrait
{
    /**
     * Generate success response.
     *
     * @param  mixed  $data
     * @param  string $message
     * @param  int    $status_code
     * @return 200
     */
    public function success($data = null, $message = 'Success', $status_code = 200)
    {
        return response()->json([
            'status' => true,
            'message' => $message,
            'data' => $data,
            'errors' => null,
        ], $status_code);
    }

    /**
     * Generate error response.
     *
     * @param  mixed  $errors
     * @param  mixed  $data
     * @param  string $message
     * @param  int    $status_code
     * @return 400
     */
    public function error($errors = null, $data = null, $message = 'Error', $status_code = 400)
    {
        return response()->json([
            'status' => false,
            'message' => $message,
            'data' => $data,
            'errors' => $errors,
        ], $status_code);
    }
}

