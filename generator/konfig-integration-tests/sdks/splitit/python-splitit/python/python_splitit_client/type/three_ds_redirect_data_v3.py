# coding: utf-8

"""
    splitit-web-api-v3

    Splitit's Web API

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal

from python_splitit_client.type.three_ds_redirect_data_v3_params import ThreeDsRedirectDataV3Params

class RequiredThreeDsRedirectDataV3(TypedDict):
    pass

class OptionalThreeDsRedirectDataV3(TypedDict, total=False):
    Url: str

    Verb: str

    Params: ThreeDsRedirectDataV3Params

class ThreeDsRedirectDataV3(RequiredThreeDsRedirectDataV3, OptionalThreeDsRedirectDataV3):
    pass