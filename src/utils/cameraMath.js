// src/utils/cameraMath.js

/**
 * Calculates the perfect SVG viewBox string for a centered camera zoom and vertical pan.
 * @param {number} zoomLevel - The scale factor (e.g., 4 for 4x zoom out)
 * @param {number} shiftAmountVH - How far to push the camera down in relative viewport height (e.g., 133.33)
 * @returns {string} The formatted viewBox string (e.g., "-3840 -720 7680 4320")
 */
export function calculateCameraViewBox(zoomLevel, shiftAmountVH) {
    const baseW = 1920;
    const baseH = 1080;

    const targetW = baseW * zoomLevel;
    const targetH = baseH * zoomLevel;
    const targetMinX = -(targetW / 2);

    const trueCenterY = -(targetH / 2);
    const shiftOffset = baseH * (shiftAmountVH / 100);
    const targetMinY = trueCenterY + shiftOffset;

    return `${targetMinX} ${targetMinY} ${targetW} ${targetH}`;
}