/*
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = SnapTrade.Net.Client.OpenAPIDateConverter;

namespace SnapTrade.Net.Model
{
    /// <summary>
    /// TradingPlaceOCOOrderRequest
    /// </summary>
    [DataContract(Name = "Trading_placeOCOOrder_request")]
    public partial class TradingPlaceOCOOrderRequest : IEquatable<TradingPlaceOCOOrderRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TradingPlaceOCOOrderRequest" /> class.
        /// </summary>
        /// <param name="firstTradeId">The ID of first trade object obtained from trade/impact endpoint.</param>
        /// <param name="secondTradeId">The ID of second trade object obtained from trade/impact endpoint.</param>
        public TradingPlaceOCOOrderRequest(Object firstTradeId = default(Object), Object secondTradeId = default(Object))
        {
            this.FirstTradeId = firstTradeId;
            this.SecondTradeId = secondTradeId;
        }

        /// <summary>
        /// The ID of first trade object obtained from trade/impact endpoint
        /// </summary>
        /// <value>The ID of first trade object obtained from trade/impact endpoint</value>
        [DataMember(Name = "first_trade_id", EmitDefaultValue = true)]
        public Object FirstTradeId { get; set; }

        /// <summary>
        /// The ID of second trade object obtained from trade/impact endpoint
        /// </summary>
        /// <value>The ID of second trade object obtained from trade/impact endpoint</value>
        [DataMember(Name = "second_trade_id", EmitDefaultValue = true)]
        public Object SecondTradeId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TradingPlaceOCOOrderRequest {\n");
            sb.Append("  FirstTradeId: ").Append(FirstTradeId).Append("\n");
            sb.Append("  SecondTradeId: ").Append(SecondTradeId).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as TradingPlaceOCOOrderRequest);
        }

        /// <summary>
        /// Returns true if TradingPlaceOCOOrderRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of TradingPlaceOCOOrderRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TradingPlaceOCOOrderRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FirstTradeId == input.FirstTradeId ||
                    (this.FirstTradeId != null &&
                    this.FirstTradeId.Equals(input.FirstTradeId))
                ) && 
                (
                    this.SecondTradeId == input.SecondTradeId ||
                    (this.SecondTradeId != null &&
                    this.SecondTradeId.Equals(input.SecondTradeId))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.FirstTradeId != null)
                {
                    hashCode = (hashCode * 59) + this.FirstTradeId.GetHashCode();
                }
                if (this.SecondTradeId != null)
                {
                    hashCode = (hashCode * 59) + this.SecondTradeId.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}